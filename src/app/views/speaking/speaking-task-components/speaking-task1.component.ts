import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: 'speaking-task1.component.html'
})
export class SpeakingTask1Component {

  constructor(private activatedRoute: ActivatedRoute) {
    // Access parent route data like this
    // console.log(this.activatedRoute.snapshot.parent.params);
  }

}
