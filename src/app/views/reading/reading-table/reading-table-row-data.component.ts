import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Reading} from '../../../models/reading.model';

@Component({
  // Angular will look for the attribute reading-table-row
  // and replace everything INSIDE the element that has this attribute
  selector: '[reading-table-row-data]',
  template: `
    <td>
      <a [routerLink]="['./detail', reading.id]"
         [queryParams]="{myCurrentPage: myCurrentPage}">
        {{reading.id}}
      </a>
    </td>
    <td>{{reading.title}}</td>
  `
})
export class ReadingTableRowDataComponent implements OnChanges {

  @Input()
  myCurrentPage: number;

  @Input()
  reading: Reading;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ReadingTableRowComponent.ngOnChanges');
  }

}
