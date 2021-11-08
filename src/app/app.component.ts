import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { FirestoreService } from './services/firestore.service';
import { slider } from './route-animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider,
  ]
})
export class AppComponent {

  constructor(private firestore: FirestoreService, private auth: AuthService){
    let usuario = JSON.parse(localStorage.getItem('usuario') as string);
    if(usuario)
    {
      this.auth.signInReload(usuario);
    }
  }

  title = 'ClinicaOnline';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}