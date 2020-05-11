import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LearningReadingComponent} from "../learning/learning-reading.component";
import {TestingReadingComponent} from "../testing/testing-reading.component";
import {ReadingDetailComponent} from "../reading-detail/reading-detail.component";
import {LoggedInGuard} from "../../../services/logged-in.guard";
import {ReadingService} from "../../../services/reading.service";
import {TestingReadingDetailComponent} from '../testing-reading-detail/testing-reading-detail.component';
import {AddQuizletComponent} from '../quizlet/add-quizlet.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'learning',
    pathMatch: 'full'
  },
  {
    path: 'learning',
    component: LearningReadingComponent,
  },
  {
    path: 'learning/detail/:id',
    component: ReadingDetailComponent,
  },
  {
    path: 'testing',
    component: TestingReadingComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'testing/detail/:id',
    component: TestingReadingDetailComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [
    ReadingService
  ],
  exports: [RouterModule]
})
export class ReadingRoutingModule {

}
