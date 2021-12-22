import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service'; //Cookies 

import { AppRoutingModule } from './app-routing.module';

// MODULOS
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENTES
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { MenuComponent } from './Components/menu/menu.component';
import { LoginUsuarioComponent } from './Components/login-usuario/login-usuario.component';
import { LoginEmpleadoComponent } from './Components/login-empleado/login-empleado.component';
import { RegistroUsuariosComponent } from './Components/registro-usuarios/registro-usuarios.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MenuComponent,
    LoginUsuarioComponent,
    LoginEmpleadoComponent,
    RegistroUsuariosComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
