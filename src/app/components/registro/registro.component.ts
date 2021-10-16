import { ToastrService } from 'ngx-toastr';
import { Paciente } from './../../models/paciente';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Especialista } from 'src/app/models/especialista';
import { FotosService } from 'src/app/services/fotos.service';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;
  formData: FormData;
  tipoUser: string = '';
  nombreArchivo0: string = '';
  nombreArchivo1: string = '';
  user: any;

  @Input() set tipo(value: any){
    this.tipoUser = value;
    if(value === "paciente")
    {
      this.registroPaciente();
    }
    else
    {
      this.registroEspecialista();
    }
  }

  constructor(public auth: AuthService, private formBuilder: FormBuilder, private firebaseStorage: FotosService, private router: Router, private toaster: ToastrService, private firestore: FirestoreService) {
    this.form = this.formBuilder.group({});
    this.formData = new FormData();
  }


  ngOnInit(): void {
  }

  registroPaciente(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      obraSocial: ['', Validators.required],
      edad: ['', Validators.required],
      imagenes: [null, Validators.required]
    });
  }

  registroEspecialista(){
    this.form = this.formBuilder.group({
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      edad: ['',[Validators.required]],
      dni: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8)]],
      especialidad: ['',[Validators.required]],
      imagen: [null,[Validators.required]],
    });
  }

  cambioArchivo(event: any)
  {
    if (event.target.files.length > 0) 
    {
      for (let i = 0; i < event.target.files.length; i++)
      {
        if(i === 0)
        {
          this.nombreArchivo0 = event.target.files[i].name;
        }
        else
        {
          this.nombreArchivo1 = event.target.files[i].name;
        }
        this.formData.delete(`archivo${i}`);
        this.formData.append(`archivo${i}`, event.target.files[i], event.target.files[i].name)
      }
    }
  }

  async subirArchivo(){
    let archivo0 = this.formData.get('archivo0');
    let archivo1 = this.formData.get('archivo1');
    this.nombreArchivo0 = Date.now() + this.nombreArchivo0;
    this.nombreArchivo1 = Date.now() + this.nombreArchivo1;
    let referencia0 = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo0);
    let referencia1 = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo1);
    await this.firebaseStorage.tareaCloudStorage(this.nombreArchivo0, archivo0);
    await this.firebaseStorage.tareaCloudStorage(this.nombreArchivo1, archivo1);
    
    referencia0.getDownloadURL().subscribe((url0: any) => {
      if(this.tipoUser === 'especialista')
      {
        this.user.imagen = url0;
        this.firestore.addEspecialista(this.user);
      }
      else
      {
        this.user.imagenes.push(url0);
        console.log(this.user.imagenes);

        referencia1.getDownloadURL().subscribe((url1: any) =>{
          this.user.imagenes.push(url1);
          this.firestore.addPaciente(this.user);
        });
     }
    });
  }

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

  signUp(){
    if(this.tipoUser === 'paciente')
    {
      this.user = {
        email: this.form.get('email')?.value,
        nombre: this.form.get('nombre')?.value,
        apellido: this.form.get('apellido')?.value,
        dni: this.form.get('dni')?.value,
        edad: this.form.get('edad')?.value,
        obraSocial: this.form.get('obraSocial')?.value,
        password: this.form.get('password')?.value,
        perfil: this.tipoUser,
        imagenes: [],
      }
      this.registrar();
    }
    else
    {
      this.user = {
        email: this.form.get('email')?.value,
        nombre: this.form.get('nombre')?.value,
        apellido: this.form.get('apellido')?.value,
        dni: this.form.get('dni')?.value,
        edad: this.form.get('edad')?.value,
        especialidad: this.form.get('especialidad')?.value,
        password: this.form.get('password')?.value,
        perfil: this.tipoUser,
      }
      this.registrar();
    }
  }

  registrar(){
    this.auth.signUp(this.user)
    .then(async res =>{
      this.auth.loading = true;
      this.auth.isLogged = this.user;
      this.auth.mostrarToast('success', 'Datos correctos');
      await this.subirArchivo();
      this.auth.loading = false;
      this.router.navigate(['/home']);
    })
    .catch((err: any) =>{
      this.mostrarToast('error', 'Datos incorrectos');
      setTimeout( () =>{
        this.auth.loading = false;
      },1500);
    });
  }
}
