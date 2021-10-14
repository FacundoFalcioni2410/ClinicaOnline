import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;

  signIn: any = false;

  constructor(private auth: AuthService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phoneNumber: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      dni: ['', Validators.required],
      address: ['', Validators.required],
    })
  }


  ngOnInit(): void {
  }

  signUp(){
    let address: any = {
      postalCode: this.form.get('postalCode')?.value,
      address: this.form.get('address')?.value,
      city: this.form.get('city')?.value,
    }
    let user: any = {
            email: this.form.get('email')?.value,
            dni: this.form.get('dni')?.value,
            password: this.form.get('password')?.value,
            address: address,
            phoneNumber: this.form.get('phoneNumber')?.value,
    }

    this.auth.signUp(user);
  }
}
