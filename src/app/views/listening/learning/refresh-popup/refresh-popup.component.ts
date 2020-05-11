import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  template: `
    <div>
      <p>{{message}}</p>
    </div>
  `
})
export class ListeningRefreshPopupComponent {

  constructor() {

  }

  @Input()
  message: string;

}
