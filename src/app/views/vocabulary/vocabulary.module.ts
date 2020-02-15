import {NgModule} from "@angular/core";
import {TestingVocabularyComponent} from "./testing-vocabulary.component";
import {LearningVocabularyComponent} from "./learning-vocabulary.component";
import {VocabularyRoutingModule} from "./vocabulary-routing.module";

@NgModule({
  imports: [VocabularyRoutingModule],
  declarations: [TestingVocabularyComponent, LearningVocabularyComponent]
})
export class VocabularyModule {

}
