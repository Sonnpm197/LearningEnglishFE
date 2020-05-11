import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LearningVocabularyComponent} from "./learning-vocabulary.component";
import {TestingVocabularyComponent} from "./testing-vocabulary.component";
import {LoggedInGuard} from "../../services/logged-in.guard";

const routes: Routes = [
  {
    path: '',
    component: LearningVocabularyComponent
  },
  {
    path: 'learning',
    component: LearningVocabularyComponent
  },
  {
    path: 'testing',
    component: TestingVocabularyComponent,
    canActivate: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VocabularyRoutingModule {

}
