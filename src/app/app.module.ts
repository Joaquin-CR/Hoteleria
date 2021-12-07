import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

// COMPONENTES
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'landingpage', pathMatch:'full'}, //Esto va a ser lo primero que se mostrará cuando no haya nada cargado
  {path: 'landingpage', component: LandingPageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
