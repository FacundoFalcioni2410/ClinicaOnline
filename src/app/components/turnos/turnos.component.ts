import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.scss']
})
export class TurnosComponent implements OnInit {

  turnos: any;
  paciente: any;
  especialistas: any;

  constructor(public firestore: FirestoreService) { 
    this.firestore.turnosObs.subscribe( async value =>{
      this.turnos = value;
      await this.getPacientes();
      await this.getEspecialistas();

      console.log(this.turnos);
    })
  }

  async getPacientes(){    
    
    for(let turno of this.turnos)
    {
      turno.pacienteCompleto = await this.firestore.getPaciente(turno.paciente);
    }
  }

  async getEspecialistas(){    
    
    for(let turno of this.turnos)
    {
      turno.especialistaCompleto = await this.firestore.getEspecialista(turno.especialista);
    }
  }



  ngOnInit(): void {
  }

  enviarTurno(turno: any){

  }

}
