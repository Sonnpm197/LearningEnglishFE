import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Import Containers
import {DefaultLayoutComponent} from './containers';
import {AddQuizletComponent} from './views/reading/quizlet/add-quizlet.component';
import {LoginComponent} from './views/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'speaking',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'listening',
        loadChildren: () => import('./views/listening/listening.module').then(m => m.ListeningModule)
      },
      {
        path: 'reading',
        loadChildren: () => import('./views/reading/reading.module').then(m => m.ReadingModule)
      },
      {
        path: 'writing',
        loadChildren: () => import('./views/writing/writing.module').then(m => m.WritingModule)
      },
      {
        path: 'speaking',
        loadChildren: () => import('./views/speaking/speaking.module').then(m => m.SpeakingModule)
      },
      {
        path: 'grammar',
        loadChildren: () => import('./views/grammar/grammar.module').then(m => m.GrammarModule)
      },
      {
        path: 'vocabulary',
        loadChildren: () => import('./views/vocabulary/vocabulary.module').then(m => m.VocabularyModule)
      }
    ]
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
