import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  template: `
    <div>
      <p>{{message}}</p>
      <button (click)="closeRefreshPopUp()">Close</button>
    </div>
  `
})
export class ReadingRefreshPopupComponent {

  constructor(public ngbActiveModal: NgbActiveModal) {

  }

  @Input()
  message: string;

  closeRefreshPopUp() {
    this.ngbActiveModal.dismiss();
  }
}
