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
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageRegistroComponent } from './components/page-registro/page-registro.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

// LazyLoading imagen
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    PageRegistroComponent,
    UsuariosComponent,
    SpinnerComponent
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
    LazyLoadImageModule
  ],
  providers: [
    {
      provide: LAZYLOAD_IMAGE_HOOKS,
      useClass: ScrollHooks
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
