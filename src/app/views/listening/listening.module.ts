import {NgModule} from "@angular/core";
import {ListeningRoutingModule} from "./listening-routing.module";
import {TestingListeningComponent} from "./testing-listening.component";
import {LearningListeningComponent} from "./learning-listening.component";

@NgModule({
  imports: [ListeningRoutingModule],
  declarations: [TestingListeningComponent, LearningListeningComponent]
})
export class ListeningModule {

}
