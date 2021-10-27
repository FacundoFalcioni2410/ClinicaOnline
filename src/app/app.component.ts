import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './services/auth.service';
import { FirestoreService } from './services/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private firestore: FirestoreService, private auth: AuthService){
    let usuario = JSON.parse(localStorage.getItem('usuario') as string);
    if(usuario)
    {
      console.log(usuario);
      this.auth.signInReload(usuario);
    }
  }

  title = 'ClinicaOnline';
}