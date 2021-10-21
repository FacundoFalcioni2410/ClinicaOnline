import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-solicitar-turno',
  templateUrl: './solicitar-turno.component.html',
  styleUrls: ['./solicitar-turno.component.scss']
})
export class SolicitarTurnoComponent implements OnInit {

  form: FormGroup;
  especialidades: any;
  especialistas: any;
  especialidadActual = '';
  array: any = [];

  constructor(private formBuilder: FormBuilder, private firestore: FirestoreService) {
    this.form = this.formBuilder.group({
      // especialidad: ['', [Validators.required]],
      // especialista: ['',[Validators.required]],
      // fecha: ['', [Validators.required]],
    })
    this.getEspecialidades();
    this.getEspecialistas();
  }

  ngOnInit(): void {
  }

  getEspecialidades(){
    this.firestore.especialidadesObs.subscribe( value =>{
      this.especialidades = value;
      console.log(this.especialidades);
    })
  }

  getEspecialistas(){
    this.firestore.especialistasObs.subscribe( value =>{
      this.especialistas = value;
      console.log(this.especialistas);
    })
  }

  cambioEspecialidad(){
    console.log(this.especialistas);
    this.array = this.especialistas.filter( (item: any) =>{
      return item.especialidad === this.especialidadActual ? item : null
    });
    console.log(this.especialistas);
  }

  solicitarTurno(){

  }


}
