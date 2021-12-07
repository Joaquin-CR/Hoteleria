import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

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
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
