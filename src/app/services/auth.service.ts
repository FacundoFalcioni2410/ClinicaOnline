import { Especialista } from './../models/especialista';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { FirestoreService } from './firestore.service';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: any;
  loading =  false;

  constructor(private auth: AngularFireAuth, private firestore: FirestoreService, private toaster: ToastrService, private router: Router) { }

  mostrarToast(tipo: string, mensaje: string){
    if(tipo === 'success')
    {
      this.toaster.success(mensaje);
    }
    else
    {
      this.toaster.error(mensaje);
    }

  }

  signIn(user: any){
    this.loading = true;
    this.auth.signInWithEmailAndPassword(user.email, user.password)
    .then( (res: any) =>{
      console.log(res);
      this.isLogged = user;
      this.mostrarToast('success', 'Datos correctos');
      setTimeout( () =>{
      this.loading = false;
        this.router.navigate(['/home']);
      },1000)
    })
    .catch((err: any) =>{
      this.mostrarToast('error', 'Datos incorrectos');
      setTimeout( () =>{
        this.loading = false;
      },1500)
    });;
  }

  signUp(user: any){
    return this.auth.createUserWithEmailAndPassword(user.email, user.password);
  }
}
