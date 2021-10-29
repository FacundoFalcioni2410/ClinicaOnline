import { ToastrService } from 'ngx-toastr';
import { Paciente } from './../../models/paciente';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Especialista } from 'src/app/models/especialista';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2'
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  @Output() finalizado: EventEmitter<any> = new EventEmitter();

  mostrarCaptcha = false;
  loadingCaptcha = false;
  loadingFinished = false;
  form: FormGroup;
  formData: FormData;
  tipoUser: string = '';
  nombreArchivo0: string = '';
  nombreArchivo1: string = '';
  user: any;
  especialidades: any;
  especialidadActual: any = [];
  fotosOk = false;
  especialidadesCompletas: any = [];

  @Input() set tipo(value: any){
    this.tipoUser = value;
    if(value === "paciente")
    {
      this.registroPaciente();
    }
    else if(value === "especialista")
    {
      this.registroEspecialista();
    }
    else
    {
      this.registroAdmin();
    }
  }

  constructor(public auth: AuthService, private formBuilder: FormBuilder, private firebaseStorage: AngularFireStorage, private router: Router, private toaster: ToastrService, private firestore: FirestoreService) {
    this.form = this.formBuilder.group({});
    this.formData = new FormData();
    this.getEspecialidades();
  }


  agregarEspecialidad(especialidad: any){
    let index = this.especialidadActual.indexOf(especialidad);
    if(index === -1)
    {
      console.log(especialidad);
      this.especialidadesCompletas.push(especialidad);
      this.especialidadActual.push(especialidad.especialidad);
      console.log(this.especialidadActual);

      this.form.controls.especialidad?.setValue(this.especialidadActual);
      return true;
    }

    return false;
  }

  agregarNuevaEspecialidad(){
    let especialidad = {
      especialidad: this.form.controls.nuevaEspecialidad?.value,
      imagen: "https://firebasestorage.googleapis.com/v0/b/clinicaonline-ee233.appspot.com/o/default.png?alt=media&token=28e9a67e-ec8f-4b97-bd54-2840abb7ec8b"
    }
    
    if(this.agregarEspecialidad(especialidad))
    {
      let flag = false;
      for(let item of this.especialidades)
      {
        if(item.especialidad === especialidad)
        {
          flag = true;
          break;
        }
      }

      if(!flag)
      {
        this.firestore.addEspecialidad(especialidad);
      }
    }
  }

  borrarEspecialidad(especialidad: any){
    let index = this.especialidadActual.indexOf(especialidad);
    if(index !== -1)
    {
      this.especialidadActual.splice(index, 1);
    }
  }

  ngOnInit(): void {
  }

  getEspecialidades(){
    this.firestore.especialidadesObs.subscribe( value =>{
      this.especialidades = value;
    })
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
      especialidad: ['', [Validators.required]],
      nuevaEspecialidad: [''],
      imagen: [null,[Validators.required]],
    });
  }

  registroAdmin(){
    this.form = this.formBuilder.group({
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      edad: ['',[Validators.required]],
      dni: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8)]],
      imagen: [null,[Validators.required]],
    });
  }

  cambioArchivo(event: any)
  {
    if(this.tipoUser === 'paciente')
    {
      if(event.target.files.length === 2)
      {
        for (let i = 0; i < 2; i++)
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
          this.formData.append(`archivo${i}`, event.target.files[i], event.target.files[i].name);
          this.fotosOk = true;
        }
      }
      else
      {
        event.target.value = null;
        Swal.fire({text: "Debe subir dos fotos", timer:1500, timerProgressBar: true, icon: "error", toast:true, position: 'bottom'});
      }
    }
    else
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
          this.formData.append(`archivo${i}`, event.target.files[i], event.target.files[i].name);
          this.fotosOk = true;
        }
      }
    }

  }

  async subirArchivo(){
    let archivo0 = this.formData.get('archivo0');
    let archivo1 = this.formData.get('archivo1');
    this.nombreArchivo0 = Date.now().toString() + this.nombreArchivo0;
    this.nombreArchivo1 = Date.now().toString() + this.nombreArchivo1;
    let referencia0 = this.firebaseStorage.ref(this.nombreArchivo0);
    await this.firebaseStorage.upload(this.nombreArchivo0, archivo0);
    let referencia1: any = null;
    if(archivo1)
    {
      referencia1 = this.firebaseStorage.ref(this.nombreArchivo1);
      await this.firebaseStorage.upload(this.nombreArchivo1, archivo1);
    }
    
    referencia0.getDownloadURL().subscribe(async (url0: any) => {
      if(this.tipoUser === 'especialista')
      {
        this.user.imagen = url0;
        this.firestore.addEspecialista(this.user);
      }
      else if(this.tipoUser === 'Administradores')
      {
        this.user.imagen = url0;
        this.firestore.addAdmin(this.user);
      }
      else
      {
        this.user.imagenes.push(url0);

        if(referencia1)
        {
          referencia1.getDownloadURL().subscribe((url1: any) =>{
            this.user.imagenes.push(url1);
            this.firestore.addPaciente(this.user);
          });
  
          this.nombreArchivo0 = '';
          this.nombreArchivo1 = '';
        }
        else
        {
          this.auth.deleteCurrentUser();
        }
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
    if(this.fotosOk)
    {
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
      else if(this.tipoUser === "especialista")
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
          habilitado: true
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
          password: this.form.get('password')?.value,
          perfil: "admin",
        }
        this.registrar();
      }
    }
  }


  registrar(){
    this.form.reset();
    if(this.loadingFinished)
    {
      this.auth.signUp(this.user)
      .then(async res =>{
        this.auth.loading = true;
        this.auth.isLogged = this.user;
        this.user.uid = res?.user?.uid;
        await this.subirArchivo();
        this.auth.loading = false;
        if(this.tipoUser !== 'Administradores')
        {      
          this.auth.enviarVerificacionEmail();
          Swal.fire({text: "Datos correctos, se ha enviado un mail para validar su cuenta", timer:2000, timerProgressBar: true, icon: "success", toast:true, position: 'bottom'});
          this.router.navigate(['/home']);
        }
        else
        {
          this.finalizado.emit(false);
        }
      })
      .catch((err: any) =>{
        this.finalizado.emit(true);
        Swal.fire({text: "Datos incorrectos", timer:1500, timerProgressBar: true, icon: "error", toast:true, position: 'bottom'});
        setTimeout( () =>{
          this.auth.loading = false;
        },1500);
      });
    }
    else
    {
      Swal.fire({text: "Debe completar el captcha", timer:1500, timerProgressBar: true, icon: "error", toast:true, position: 'bottom'});
    }

  }
  
  captcha(){
    this.mostrarCaptcha = true;
    setTimeout((() =>{
      this.loadingCaptcha = true;
      this.loadingFinished = true;
    }),1500)
  }
}