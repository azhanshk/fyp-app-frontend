import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { FooterComponent } from './layout-components/footer/footer.component';
import { SidebarComponent } from './layout-components/sidebar/sidebar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NormalLayoutComponent } from './layouts/normal-layout/normal-layout.component';
import { NavComponent } from './layout-components/nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NormalLayoutComponent,
    DashboardLayoutComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
