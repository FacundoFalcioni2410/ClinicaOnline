import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-mis-horarios',
  templateUrl: './mis-horarios.component.html',
  styleUrls: ['./mis-horarios.component.scss']
})
export class MisHorariosComponent implements OnInit {

  form: FormGroup

  constructor(private formBuilder: FormBuilder, private firestore: FirestoreService) {
    this.form = this.formBuilder.group({
      lunes: ['', []],
      martes: ['', []],
      miercoles: ['', []],
      jueves: ['', []],
      viernes: ['', []],
      sabado: ['', []],
    })
  }

  ngOnInit(): void {
  }

  actualizarHorarios(){
    let horarios: any = [];
    if(this.form.controls?.lunes.value)
    {
      horarios.push(1);
    }
    if(this.form.controls?.martes.value)
    {
      horarios.push(2);
    }
    if(this.form.controls?.miercoles.value)
    {
      horarios.push(3);
    }
    if(this.form.controls?.jueves.value)
    {
      horarios.push(4);
    }
    if(this.form.controls?.viernes.value)
    {
      horarios.push(5);
    }
    if(this.form.controls?.sabado.value)
    {
      horarios.push(6);
    }
    console.log(horarios);
    this.firestore.updateEspecialista(horarios, this.firestore.usuarioActual?.id);
  }
}