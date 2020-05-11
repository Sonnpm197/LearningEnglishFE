import {NgModule} from '@angular/core';
import {ReadingRoutingModule} from './routing/reading-routing.module';
import {LearningReadingComponent} from './learning/learning-reading.component';
import {TestingReadingComponent} from './testing/testing-reading.component';
import {ModalDirective, ModalModule, PaginationModule} from 'ngx-bootstrap';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReadingDetailComponent} from './reading-detail/reading-detail.component';
import {CKEditorModule} from 'ckeditor4-angular';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReadingTableComponent} from './reading-table/reading-table.component';
import {ReadingTableRowDataComponent} from './reading-table/reading-table-row-data.component';
import {TestingReadingDetailComponent} from './testing-reading-detail/testing-reading-detail.component';
import {ReadingTableDataComponent} from './reading-table/reading-table-data.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReadingRefreshPopupComponent} from './testing/refresh-popup/refresh-popup.component';
import {AddQuizletComponent} from './quizlet/add-quizlet.component';

@NgModule({
  imports: [
    CommonModule, // for using ngIf, ngFor
    ReadingRoutingModule,

    // If a module defines both providers and declarations (components, directives, pipes),
    // then loading the module in multiple feature modules would duplicate the registration
    // of the service. This could result in multiple service instances and the service would
    // no longer behave as a singleton.
    PaginationModule.forRoot(),
    FormsModule, // Using form,

    CKEditorModule,
    NgxPaginationModule,

    // For showing ModalDirective
    ModalModule.forRoot(),

    // For showing Ngx-boostrap modal
    // Remember to install this "npm install --save @ng-bootstrap/ng-bootstrap"
    NgbModule
  ],
  declarations: [
    LearningReadingComponent,
    TestingReadingComponent,
    ReadingDetailComponent,
    ReadingTableComponent,
    ReadingTableDataComponent,
    ReadingTableRowDataComponent,
    TestingReadingDetailComponent,
    ReadingRefreshPopupComponent, // don't forget to declare entry component here
    AddQuizletComponent
  ],

  // Angular needs to know what components might be rendered dynamically
  entryComponents: [
    ReadingRefreshPopupComponent
  ]
})
export class ReadingModule {

}
