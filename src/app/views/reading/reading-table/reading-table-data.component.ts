import {Component, Input} from '@angular/core';

@Component({
  // Angular will look for the attribute reading-table
  // and replace everything INSIDE the element that has this attribute
  selector: '[reading-table-data]',
  template: `
    <thead>
      <tr>
        <th *ngFor="let header of headers">{{header}}</th>
      </tr>
    </thead>
    <tbody>
      <!--<tr> element will be generated here-->
      <ng-content></ng-content>
    </tbody>
  `
})
export class ReadingTableDataComponent {

  @Input()
  headers: string[];

}
