import {Component} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {ApplicationsActions} from '../applications.actions';

@Component({
  selector: 'app-add-application-button',
  templateUrl: './add-application-button.component.html',
  styleUrls: ['./add-application-button.component.css']
})
export class AddApplicationButtonComponent {

  constructor(private actions: ApplicationsActions) {
  }

  @dispatch()
  showAddApplicationModal() {
    return this.actions.showAddApplicationModal();
  }

}
