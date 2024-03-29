import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {AppComponent} from './app.component';

// Import containers
import {DefaultLayoutComponent} from './containers';

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import {AppRoutingModule} from './app.routing';

// Import 3rd party components
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ChartsModule} from 'ng2-charts';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoggedInGuard} from './services/logged-in.guard';
import {AuthenService} from './services/authen.service';
import {CKEditorModule} from 'ckeditor4-angular';
import {RequestInterceptor} from './interceptors/request.interceptor';
import {AddQuizletComponent} from './views/reading/quizlet/add-quizlet.component';
import {LoginComponent} from './views/login/login.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

@NgModule({
  imports: [
    // it is used when you want to run your application in a browser.
    BrowserModule,
    // Some Material components depend on the Angular animations module in
    // order to be able to do more advanced transitions. If you want these
    // animations to work in your app, you have to install the @angular/animations
    // module and include the BrowserAnimationsModule in your app.
    BrowserAnimationsModule,

    // Main routing module
    AppRoutingModule,

    // coreUI
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
    // ================

    // ngx-boostrap
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),

    HttpClientModule,

    // ng2-charts
    ChartsModule,

    CKEditorModule,

  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    LoginComponent
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    LoggedInGuard,
    AuthenService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true // allow multi interceptors
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
