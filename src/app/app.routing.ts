import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Import Containers
import {DefaultLayoutComponent} from './containers';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
  }
];

@NgModule({
  // Only one module can have forRoot. Other feature modules must be forChild
  imports: [RouterModule.forRoot(routes)],

  // You don't need to export RouterModule. It's just for convenience.
  // If you add AppRoutingModule to AppModule you also implicitly import RouterModule this way.
  // Otherwise you would need to import it explicitly like this
  // ================================
  // @NgModule({
  //   imports: [AppRoutingModule, RouterModule],
  // })
  // export class AppModule {}
  // ================================
  // for example to be able to use <router-outlet> or RouterLink in components declared in AppModule
  exports: [RouterModule]
})
export class AppRoutingModule {
}
