import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormalLayoutComponent } from './layouts/normal-layout/normal-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  // { path: 'home', 
  // loadChildren: () => import('./pages/pages.module')
  // .then(m => m.PagesModule) }, 
  // { path: 'home', 
  // loadChildren: () => import('./dashboard-pages/dashboard-pages.module')
  // .then(m => m.DashboardPagesModule) },
  // {path:'/',component:LoginComponent},
  // {
  //   path: 'signup',
  //   component: SignupComponent
  // },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }
  {path:'',component:NormalLayoutComponent},
  {path:'dashboard',component:DashboardLayoutComponent},
  {
      path: '**',
      component: NotFoundComponent
    }


];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
