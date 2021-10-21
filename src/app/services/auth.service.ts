import { Especialista } from './../models/especialista';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { FirestoreService } from './firestore.service';
import Swal from 'sweetalert2'

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

  async emailValido(user: any,res: any): Promise<any>{
    if(user.email !== "admin@admin.com" && user.email !== "especialista@especialista.com" && user.email !== "paciente@paciente.com")
    {
      if(!res.user.emailVerifed)
      {
        this.mostrarToast('error', 'Para ingresar debe validar su email');
        this.loading = false;
        return '';
      }
    }

    return await this.firestore.getUser(user.email);
  }

  async signIn(user: any){
    this.loading = true;
    this.auth.signInWithEmailAndPassword(user.email, user.password)
    .then( async (res: any) =>{
      let userF = await this.emailValido(user, res);
      console.log(userF);
      if(userF?.especialidad && userF?.habilitado === false)
      {
          Swal.fire({text: "El usuario ha sido deshabilitado, contactese con un administrador para saber mas al respecto", timer:2500, timerProgressBar: true, icon: "error", toast:true, position: 'bottom'});
          this.loading = false;
      }
      else
      {
        this.firestore.usuarioActual = userF;
        console.log('usuario actual: ', this.firestore.usuarioActual);
        Swal.fire({text: "Datos correctos", timer:1500, timerProgressBar: true, icon: "success", toast:true, position: 'bottom'});
        this.loading = false;
        this.router.navigate(['/home']);
      }
      
    })
    .catch((err: any) =>{
      Swal.fire({text: "Datos incorrectos", timer:1500, timerProgressBar: true, icon: "error", toast:true, position: 'bottom'});
      setTimeout( () =>{
        this.loading = false;
      },1500)
    });
  }

  signUp(user: any){
    return this.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logOut(){
    this.auth.signOut()
    .then( res =>{
      this.firestore.usuarioActual = null;
      this.router.navigate(['/login']);
    });
  }
  
  async enviarVerificacionEmail(){
    return (await this.auth.currentUser)?.sendEmailVerification();
  }
}
