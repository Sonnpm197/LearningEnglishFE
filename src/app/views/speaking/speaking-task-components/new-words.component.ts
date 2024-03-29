import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  template: `
    <div class="card" cardType [highlightColor] ="'yellow'">
      <div class="card-header">
        Card title
      </div>
      <div class="card-body">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
        erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
        consequat.
      </div>
    </div>
  `
})
export class NewWordsComponent {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    });
  }

}
