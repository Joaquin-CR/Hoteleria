import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service'; //Cookies 

import { AppRoutingModule } from './app-routing.module';

// MODULOS
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// COMPONENTES
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { MenuComponent } from './Components/menu/menu.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'landingpage', pathMatch:'full'}, //Esto va a ser lo primero que se mostrará cuando no haya nada cargado
  {path: 'landingpage', component: LandingPageComponent},
  {path:'**', redirectTo: 'landingpage', pathMatch: 'full'} //Si se ingresa un complemento de liga esta redirecciona a la indicada
]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [/*CookieService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
