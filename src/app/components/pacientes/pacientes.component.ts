import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  especialista: any;
  paciente: any;
  turnos: any = [];
  pacientesEspecialista: any = [];

  terminado: boolean = false;
  
  constructor(public firestore: FirestoreService) {
    this.especialista = JSON.parse(localStorage.getItem('usuario') as string);
    this.firestore.turnosObs.subscribe(async res =>{
      let paciente: any;
      for(let turno of res)
      {
        if(turno.especialista === this.especialista.dni)
        {
          this.turnos.push(turno);
          paciente = await this.firestore.getPaciente(turno.paciente);
          this.pacientesEspecialista.push(paciente);
        }
      }
      this.pacientesEspecialista = this.eliminarObjetosDuplicados(this.pacientesEspecialista, 'dni');
      this.terminado = true;
    });
  }

  ngOnInit(): void {
  }

  eliminarObjetosDuplicados(arr: any, prop: any) {
    var nuevoArray: any = [];
    var lookup: any = {};

    for (let i in arr) {
      lookup[arr[i][prop]] = arr[i];
    }

    for (let i in lookup) {
      nuevoArray.push(lookup[i]);
    }

    return nuevoArray;
  }

  seleccionarPaciente(paciente: any){
    this.paciente = paciente;
  }
}
