import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LearningGrammarComponent} from "./learning-grammar.component";
import {TestingGrammarComponent} from "./testing-grammar.component";
import {LoggedInGuard} from "../../services/logged-in.guard";

const routes: Routes = [
  {
    path: '',
    component: LearningGrammarComponent
  },
  {
    path: 'learning',
    component: LearningGrammarComponent
  },
  {
    path: 'testing',
    component: TestingGrammarComponent,
    canActivate: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrammarRoutingModule {

}
