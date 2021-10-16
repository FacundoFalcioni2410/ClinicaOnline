import { Especialista } from './../models/especialista';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: any = false;
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
    .then( async (res: any) =>{
      console.log(res);
      this.firestore.getUser(user.email);
      this.mostrarToast('success', 'Datos correctos');
      this.isLogged = true;
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
    });
  }

  signUp(user: any){
    return this.auth.createUserWithEmailAndPassword(user.email, user.password);
  }
}
