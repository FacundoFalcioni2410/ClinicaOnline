import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2'

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
      lunesM: ['', []],
      lunesT: ['', []],
      martes: ['', []],
      martesM: ['', []],
      martesT: ['', []],
      miercoles: ['', []],
      miercolesM: ['', []],
      miercolesT: ['', []],
      jueves: ['', []],
      juevesM: ['', []],
      juevesT: ['', []],
      viernes: ['', []],
      viernesM: ['', []],
      viernesT: ['', []],
      sabado: ['', []],
      sabadoM: ['', []],
    })
  }

  ngOnInit(): void {
  }

  actualizarHorarios(){
    let horarios: any = [];
    let horario = {};
    if(this.form.controls?.lunes.value)
    {
      if(this.form.controls?.lunesM?.value && this.form.controls?.lunesT.value)
      {
        horario = {
          dia: 1,
          turno: 'T-M'
        }
      }
      else
      {
        horario = {
          dia: 1,
          turno: this.form.controls.lunesM?.value ? 'M' : 'T'
        }
      }
      horarios.push(horario);
    }
    if(this.form.controls?.martes.value)
    {
      if(this.form.controls?.martesM?.value && this.form.controls?.martesT.value)
      {
        horario = {
          dia: 2,
          turno: 'T-M'
        }
      }
      else
      {
        horario = {
          dia: 2,
          turno: this.form.controls.martesM?.value ? 'M' : 'T'
        }
      }
      horarios.push(horario);
    }
    if(this.form.controls?.miercoles.value)
    {
      if(this.form.controls?.miercolesM?.value && this.form.controls?.miercolesT.value)
      {
        horario = {
          dia: 3,
          turno: 'T-M'
        }
      }
      else
      {
        horario = {
          dia: 3,
          turno: this.form.controls.miercolesM?.value ? 'M' : 'T'
        }
      }
      horarios.push(horario);
    }
    if(this.form.controls?.jueves.value)
    {
      if(this.form.controls?.juevesM?.value && this.form.controls?.juevesT.value)
      {
        horario = {
          dia: 4,
          turno: 'T-M'
        }
      }
      else
      {
        horario = {
          dia: 4,
          turno: this.form.controls.juevesM?.value ? 'M' : 'T'
        }
      }
      horarios.push(horario);
    }
    if(this.form.controls?.viernes.value)
    {
      if(this.form.controls?.viernesM?.value && this.form.controls?.viernesT.value)
      {
        horario = {
          dia: 5,
          turno: 'T-M'
        }
      }
      else
      {
        horario = {
          dia: 5,
          turno: this.form.controls.viernesM?.value ? 'M' : 'T'
        }
      }
      horarios.push(horario);
    }
    if(this.form.controls?.sabado.value && this.form.controls?.sabadoM.value)
    {
      horario = {
        dia: 6,
        turno: 'M'
      }
      horarios.push(horario);
    }
    this.firestore.updateEspecialista(horarios, this.firestore.usuarioActual?.id);
    Swal.fire({text: 'Horarios actualizados con exito', timer: 2000,timerProgressBar: true, icon: 'success', toast: true, position: 'bottom'});
  }
}