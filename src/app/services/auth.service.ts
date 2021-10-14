import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: any;

  constructor(private auth: AngularFireAuth) { }

  signIn(user: any){
    this.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  signUp(user: any){
    this.auth.createUserWithEmailAndPassword(user.email, user.password);
  }
}
