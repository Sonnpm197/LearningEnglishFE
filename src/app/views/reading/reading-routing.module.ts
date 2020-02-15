import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LearningReadingComponent} from "./learning-reading.component";
import {TestingReadingComponent} from "./testing-reading.component";

const routes: Routes = [
  {
    path: '',
    component: LearningReadingComponent
  },
  {
    path: 'learning',
    component: LearningReadingComponent
  },
  {
    path: 'testing',
    component: TestingReadingComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ReadingRoutingModule {

}
