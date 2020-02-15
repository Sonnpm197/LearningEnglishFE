import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LearningWritingComponent} from "./learning-writing.component";
import {TestingWritingComponent} from "./testing-writing.component";

const routes: Routes = [
  {
    path: '',
    component: LearningWritingComponent
  },
  {
    path: 'learning',
    component: LearningWritingComponent
  },
  {
    path: 'testing',
    component: TestingWritingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WritingRoutingModule {

}
