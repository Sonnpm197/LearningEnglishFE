import {Component, Input, ViewChild} from '@angular/core';
import {Reading} from '../../../models/reading.model';
import {ActivatedRoute} from '@angular/router';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
  selector: 'reading-table-component',
  template: `
    <table class="table" reading-table-data [headers]="headers">
      <!--Note that myCurrentPage and reading are input properties of reading-table-row-data-->
      <tr reading-table-row-data
          *ngFor="let reading of readingSamplesForPractice
                  | paginate: { itemsPerPage: 5, currentPage: myCurrentPage }"
          [myCurrentPage]="myCurrentPage"
          [reading]="reading">
      </tr>
    </table>
    <div class="row">
      <div class="has-text-centered">
        <pagination-controls (pageChange)="myCurrentPage = $event"></pagination-controls>
      </div>
    </div>
  `
})
export class ReadingTableComponent {

  @Input()
  readingSamplesForPractice: Array<Reading>;

  @Input()
  headers: string[];

  myCurrentPage: number = 1;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.myCurrentPage = queryParams.myCurrentPage;
    });
  }

  refresh() {
    console.log('refresh from child');
  }
}
