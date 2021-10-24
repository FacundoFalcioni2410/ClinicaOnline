import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2';

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

  aceptarTurno(turno: any){
    turno.estado = "aceptado";
    this.firestore.modificarEstadoTurno(turno);
  }

  rechazarTurno(turno: any){

  }

  cancelarTurno(turno: any){
    
  }

  finalizarTurno(turno: any){

  }

  verComentario(turno: any){

  }


  async motivoCancelar(turno: any){
    const { value: razon } = await Swal.fire({
      title: 'Cancelación de turno',
      input: 'text',
      inputLabel: 'Motivo de cancelación',
      inputValue: '',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Debe especificar el motivo de la cancelación'
        }
        else
        {
          return '';
        }
      },
      inputAttributes: {
        required: "true"
      },
    });

    if(razon)
    {
      turno.estado = 'cancelado';
      turno.razon = razon;
      this.firestore.modificarEstadoTurno(turno);
    }
    else
    {
      Swal.fire({text: 'El turno no ha podido ser cancelado. Motivo: Debe especificar una razon', timer: 2500, timerProgressBar: true, icon: 'error', position: 'bottom', toast: true});
    }
  }




  ngOnInit(): void {
  }

  enviarTurno(turno: any){

  }

}
