import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  template: `<p>This is speaking task2</p>`,
})
export class SpeakingTask2Component {

  constructor(private activatedRoute: ActivatedRoute) {
    // Access parent route data like this
    // console.log(this.activatedRoute.snapshot.parent.params);
  }

}
