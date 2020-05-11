import {Component} from '@angular/core';
import {ReadingTest} from '../../../models/reading-test.model';
import {ReadingService} from '../../../services/reading.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ReadingRefreshPopupComponent} from './refresh-popup/refresh-popup.component';

@Component({
  templateUrl: 'testing-reading.component.html'
})
export class TestingReadingComponent {

  headers: string[];

  readingTests: Array<ReadingTest>;

  myCurrentPage: number = 1;

  constructor(
    private readingService: ReadingService,
    private ngbModal: NgbModal
  ) {
    this.headers = ['ID'];
    this.readingTests = readingService.getReadingTests();
  }

  openRefreshPopUp() {
    const openedModal = this.ngbModal.open(ReadingRefreshPopupComponent);
    openedModal.componentInstance.message = 'Do you want to refresh reading tests ?';
  }
}
