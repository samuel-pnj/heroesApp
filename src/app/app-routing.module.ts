import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthModule } from './auth/auth.module';
import { HeroesModule } from './heroes/heroes.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'404',
    component: ErrorPageComponent
  },
  {
    path:'**',
    //component: ErrorPageComponent
    redirectTo: '404'
  },
  {
    path:'heroes',
    loadChildren: ()=> import ( './heroes/heroes.module').then(m => m.HeroesModule)
  }

]


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports:[
  RouterModule
  ]
})
export class AppRoutingModule { }
