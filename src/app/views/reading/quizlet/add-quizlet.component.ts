import {Component} from '@angular/core';

@Component({
  template: `
    <a [routerLink] = "['changeRoute1']">changeRoute1</a>
    <a [routerLink] = "['changeRoute2']">changeRoute2</a>
  `
})
export class AddQuizletComponent {

}
