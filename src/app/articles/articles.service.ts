import {Injectable} from '@angular/core';
import {TransferState, makeStateKey, Meta, Title} from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Article} from '../landing/landing.state';
import {User} from '../user/user.state';

@Injectable()
export class ArticlesService {

  constructor(private http: HttpClient, private state: TransferState, private title: Title, private meta: Meta) {
  }

  fetchArticles(): Observable<Article[]> {
    const articlesKey = makeStateKey('articles');
    const articlesState = this.state.get(articlesKey, null as Article[]);

    if (articlesState) {
      this.title.setTitle('el-davos blog');
      return Observable.of(articlesState);
    }

    const filter = {
      where: {
        public: true
      },
      fields: {
        content: false,
        parsedContent: false
      }
    };

    return this.http.get<Article[]>(`${environment.blogApi}/articles?filter=${JSON.stringify(filter)}`)
      .map(articles => {
        this.state.set(articlesKey, articles);
        this.title.setTitle('el-davos blog');
        this.meta.addTag({property: 'description', content: 'el-davos blog'});
        this.meta.addTag({property: 'og:title', content: 'el-davos blog'});
        this.meta.addTag({property: 'og:site_name', content: 'el-davos blog'});
        this.meta.addTag({property: 'og:type', content: 'blog'});

        return articles;
      });
  }

  fetchArticle(articleId: string): Observable<Article> {
    const articleStateKey = makeStateKey(`article-${articleId}`);
    const articleState = this.state.get(articleStateKey, null as Article);

    if (articleState) {
      this.title.setTitle(articleState.name);
      return Observable.of(articleState);
    }

    return this.http.get<Article>(`${environment.blogApi}/articles/${articleId}`)
      .map(article => {
        this.state.set(articleStateKey, article);
        this.title.setTitle(article.name);
        this.meta.addTag({property: 'description', content: article.summary});
        this.meta.addTag({property: 'og:title', content: article.name});
        this.meta.addTag({property: 'og:site_name', content: 'el-davos blog'});
        this.meta.addTag({property: 'og:type', content: 'blog'});

        return article;
      });
  }

  addArticle(user: User, article: Article) {
    article.userId = user.id;
    return this.http.post(`${environment.blogApi}/articles`, article, {
      headers: new HttpHeaders().set('authorization', user.id)
    });
  }
}
