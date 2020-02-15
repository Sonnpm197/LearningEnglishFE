import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LearningSpeakingComponent} from "./learning-speaking.component";
import {TestingSpeakingComponent} from "./testing-speaking.component";

const routes: Routes = [
  {
    path: '',
    component: LearningSpeakingComponent
  },
  {
    path: 'learning',
    component: LearningSpeakingComponent
  },
  {
    path: 'testing',
    component: TestingSpeakingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakingRoutingModule {

}
