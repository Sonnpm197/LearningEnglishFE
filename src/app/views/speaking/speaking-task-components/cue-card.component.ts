import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  template: `
    <div class="card" cardType highlightColor="yellow">
      <div class="card-header">
        Card title
      </div>
      <div class="card-body">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
        erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
        consequat.
      </div>
    </div>

    <button class="btn btn-secondary" type="button" (click)="closeCueCard()">Close</button>
  `
})
export class CueCardComponent {

  constructor(private router: Router) {

  }

  closeCueCard() {
    this.router.navigate(['speaking/learning/task1',
      {
        outlets: {
          'new-words': ['newwords', 'abc'],
          'cue-card': null // close secondary route
        }
      }]);
  }

}
