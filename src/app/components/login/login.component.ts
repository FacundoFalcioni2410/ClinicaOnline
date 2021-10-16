import { Paciente } from './../../models/paciente';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(public auth: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
  }

  signIn(){
    this.auth.signIn(this.form.value);
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
