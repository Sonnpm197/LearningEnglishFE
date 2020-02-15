import {NgModule} from "@angular/core";
import {LearningGrammarComponent} from "./learning-grammar.component";
import {TestingGrammarComponent} from "./testing-grammar.component";
import {GrammarRoutingModule} from "./grammar-routing.module";

@NgModule({
  imports: [GrammarRoutingModule],
  declarations: [LearningGrammarComponent, TestingGrammarComponent]
})
export class GrammarModule {

}
