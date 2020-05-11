import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LearningSpeakingComponent} from "./learning-speaking.component";
import {TestingSpeakingComponent} from "./testing-speaking.component";
import {LoggedInGuard} from "../../services/logged-in.guard";
import {SpeakingTask1Component} from './speaking-task-components/speaking-task1.component';
import {SpeakingTask2Component} from './speaking-task-components/speaking-task2.component';
import {SpeakingTask3Component} from './speaking-task-components/speaking-task3.component';
import {CueCardComponent} from './speaking-task-components/cue-card.component';
import {NewWordsComponent} from './speaking-task-components/new-words.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'learning',
    pathMatch: 'full'
  },
  {
    path: 'learning',
    component: LearningSpeakingComponent,
    children: [
      {
        path: 'task1',
        component: SpeakingTask1Component,
        children: [
          {
            path: 'cuecard',
            component: CueCardComponent,
            outlet: 'cue-card'
          },
          {
            path: 'newwords',
            component: NewWordsComponent,
            outlet: 'new-words',
          },
          {
            path: 'newwords/:content',
            component: NewWordsComponent,
            outlet: 'new-words',
          }
        ]
      },
      {
        path: 'task2',
        component: SpeakingTask2Component,
      },
      {
        path: 'task3',
        component: SpeakingTask3Component,
      }
    ]
  },
  {
    path: 'testing',
    component: TestingSpeakingComponent,
    canActivate: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // add the RouterModule in the exports, which makes the router directives
  // available to this module’s templates
  exports: [RouterModule]
})
export class SpeakingRoutingModule {

}
