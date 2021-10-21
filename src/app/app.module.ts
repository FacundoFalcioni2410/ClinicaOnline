import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './components/registro/registro.component'; 

// Firebase
import { AngularFireModule } from '@angular/fire/compat';

// Toastr
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageRegistroComponent } from './components/page-registro/page-registro.component';

// LazyLoading imagen
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';
import { SharedModule } from './modules/shared/shared.module';
import { SinPermisosComponent } from './components/sin-permisos/sin-permisos.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { MisHorariosComponent } from './components/mis-horarios/mis-horarios.component';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from "ng-recaptcha";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    PageRegistroComponent,
    SinPermisosComponent,
    MiPerfilComponent,
    MisHorariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),
    LazyLoadImageModule,
    SharedModule,
    RecaptchaModule,
    RecaptchaV3Module,
    // SweetAlert2Module.forRoot()
  ],
  providers: [
    {
      provide: LAZYLOAD_IMAGE_HOOKS,
      useClass: ScrollHooks
    },
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: "6LfHsOUcAAAAAOmlfLmi2XN9CN1khhahwkEwAUkr" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
