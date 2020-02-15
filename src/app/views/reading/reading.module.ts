import {NgModule} from "@angular/core";
import {ReadingRoutingModule} from "./reading-routing.module";
import {LearningReadingComponent} from "./learning-reading.component";
import {TestingReadingComponent} from "./testing-reading.component";

@NgModule({
  imports: [ReadingRoutingModule],
  declarations: [LearningReadingComponent, TestingReadingComponent]
})
export class ReadingModule {

}
