import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  template: `<p>This is speaking task3</p>`,
})
export class SpeakingTask3Component {

  constructor(private activatedRoute: ActivatedRoute) {
    // Access parent route data like this
    // console.log(this.activatedRoute.snapshot.parent.params);
  }

}
