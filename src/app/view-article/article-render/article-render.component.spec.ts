import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleRenderComponent } from './article-render.component';

describe('ArticleRenderComponent', () => {
  let component: ArticleRenderComponent;
  let fixture: ComponentFixture<ArticleRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
