import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LearningListeningComponent} from "../learning/learning-listening.component";
import {TestingListeningComponent} from "../testing/testing-listening.component";
import {LoggedInGuard} from "../../../services/logged-in.guard";

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
    component: TestingListeningComponent,
    canActivate: [LoggedInGuard]
  }

];

@NgModule({
  // we’re declaring routes that
  // belong to an imported module instead of the main App module
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] // to not import router module in parent module
})
export class ListeningRoutingModule {

}
