import {NgModule} from "@angular/core";
import {WritingRoutingModule} from "./writing-routing.module";
import {LearningWritingComponent} from "./learning-writing.component";
import {TestingWritingComponent} from "./testing-writing.component";

@NgModule({
  imports: [WritingRoutingModule],
  declarations: [LearningWritingComponent, TestingWritingComponent]
})
export class WritingModule {

}
