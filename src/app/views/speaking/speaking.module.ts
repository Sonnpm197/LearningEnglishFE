import {NgModule} from "@angular/core";
import {SpeakingRoutingModule} from "./speaking-routing.module";
import {LearningSpeakingComponent} from "./learning-speaking.component";
import {TestingSpeakingComponent} from "./testing-speaking.component";
import {CommonModule} from '@angular/common';
import {CollapseModule} from 'ngx-bootstrap';
import {SpeakingTask1Component} from './speaking-task-components/speaking-task1.component';
import {SpeakingTask3Component} from './speaking-task-components/speaking-task3.component';
import {SpeakingTask2Component} from './speaking-task-components/speaking-task2.component';
import {CueCardComponent} from './speaking-task-components/cue-card.component';
import {NewWordsComponent} from './speaking-task-components/new-words.component';
import {CustomSpeakingCardDirective} from '../../directives/custom-speaking-card.directive';

@NgModule({
  imports: [
    CommonModule,
    SpeakingRoutingModule,
    CollapseModule.forRoot(),
  ],
  declarations: [
    LearningSpeakingComponent,
    TestingSpeakingComponent,
    SpeakingTask1Component,
    SpeakingTask2Component,
    SpeakingTask3Component,
    CueCardComponent,
    NewWordsComponent,
    CustomSpeakingCardDirective
  ]
})
export class SpeakingModule {

}
