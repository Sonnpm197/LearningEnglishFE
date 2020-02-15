import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LearningListeningComponent} from "./learning-listening.component";
import {TestingListeningComponent} from "./testing-listening.component";

const routes: Routes = [

  {
    path: '',
    component: LearningListeningComponent
  },
  {
    path: 'learning',
    component: LearningListeningComponent
  },
  {
    path: 'testing',
    component: TestingListeningComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] // to not import router module in parent module
})
export class ListeningRoutingModule {

}
