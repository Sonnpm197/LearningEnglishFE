import {NgModule} from "@angular/core";
import {SpeakingRoutingModule} from "./speaking-routing.module";
import {LearningSpeakingComponent} from "./learning-speaking.component";
import {TestingSpeakingComponent} from "./testing-speaking.component";

@NgModule({
  imports: [SpeakingRoutingModule],
  declarations: [LearningSpeakingComponent, TestingSpeakingComponent]
})
export class SpeakingModule {

}
