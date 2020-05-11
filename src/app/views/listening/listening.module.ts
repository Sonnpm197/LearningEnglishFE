import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {ListeningRoutingModule} from './routing/listening-routing.module';
import {TestingListeningComponent} from './testing/testing-listening.component';
import {LearningListeningComponent} from './learning/learning-listening.component';
import {SearchBarComponent} from './learning/search-bar/search-bar.component';
import {YoutubeService} from '../../services/youtube.service';
import {CommonModule} from '@angular/common';
import {SearchResultsComponent} from './learning/search-results/search-results.component';
import {SearchResultsContentChildComponent} from './learning/search-results/search-results-content-child/search-results-content-child.component';
import {FormsModule} from '@angular/forms';
import {ListeningRefreshPopupComponent} from './learning/refresh-popup/refresh-popup.component';

const youtubeConfig: Array<any> = [
  {provide: 'YOUTUBE_API_KEY', useValue: 'AIzaSyBxRWjfmfPEHxIQ2MOyiAru99ZEoKL_-KU'},
  {provide: 'YOUTUBE_REQUEST_URL', useValue: 'https://www.googleapis.com/youtube/v3/search'},
  {provide: 'YOUTUBE_VIDEO_URL', useValue: 'https://www.youtube.com/watch?v='}
];

@NgModule({
  imports: [
    CommonModule,
    ListeningRoutingModule,
    FormsModule
  ],
  declarations: [
    TestingListeningComponent,
    LearningListeningComponent,
    SearchBarComponent,
    SearchResultsComponent,
    SearchResultsContentChildComponent,
    ListeningRefreshPopupComponent
  ],
  providers: [
    youtubeConfig,
    YoutubeService
  ],
  schemas: [
    // Prevent cannot use <ng-content select="abcd>
    // with abcd is an content child element
    NO_ERRORS_SCHEMA
  ],
  entryComponents: [
    ListeningRefreshPopupComponent
  ]
})
export class ListeningModule {

}
