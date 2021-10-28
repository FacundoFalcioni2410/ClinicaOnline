import { Paciente } from './../../models/paciente';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  spinner = "../../../assets/spinnerImage.gif"
  form: FormGroup
  admin: any;
  pacientes: any;
  especialistas: any;
  usuarios: any = [];

  constructor(public auth: AuthService, private formBuilder: FormBuilder, private router: Router, public firestore: FirestoreService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    var subscription = this.firestore.getPacientes().subscribe( res =>{
      this.pacientes = res;
      this.usuarios = this.usuarios.concat(this.pacientes);
    });
    this.firestore.getEspecialistas().subscribe( async res =>{
      this.especialistas = res;
      this.admin = await this.firestore.getGenerico('administradores', 'email', 'admin@admin.com');
      this.usuarios.push(this.admin[0]);
      this.usuarios = this.usuarios.concat(this.especialistas);
      console.log(this.usuarios);
      subscription.unsubscribe();
    });
  }

  ngOnInit(): void {
  }

  signIn(){
    this.auth.signIn(this.form.value);
    this.form.reset();
  }

  loginEspecialista(){
    this.form.get('email')?.setValue('especialista@especialista.com');
    this.form.get('password')?.setValue('especialista');
    this.signIn();
  }

  loginPaciente(){
    this.form.get('email')?.setValue('paciente@paciente.com');
    this.form.get('password')?.setValue('paciente');
    this.signIn();
  }

  loginAdmin(){
    this.form.get('email')?.setValue('admin@admin.com');
    this.form.get('password')?.setValue('adminadmin');
    this.signIn();
  }
}
