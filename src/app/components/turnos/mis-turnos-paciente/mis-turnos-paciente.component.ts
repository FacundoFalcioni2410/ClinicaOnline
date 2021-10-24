import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-mis-turnos-paciente',
  templateUrl: './mis-turnos-paciente.component.html',
  styleUrls: ['./mis-turnos-paciente.component.scss']
})
export class MisTurnosPacienteComponent implements OnInit {

  turnos: any = [];
  turnosMostrar: any;

  pacientes: any = [];
  paciente: any;

  especialistas: any = [];
  especialista: any;

  especialidades: any = [];
  especialidad: any;

  mensaje: string = '';

  
  constructor(public firestore: FirestoreService) { 
    this.firestore.turnosObs.subscribe( async (value: any) =>{
      this.paciente = JSON.parse(localStorage.getItem('usuario') as string);
      
      let index = 0;

      for(let item of value)
      {
        if(item.paciente === this.paciente.dni)
        {
          this.turnos.push(item);
          index = this.especialidades.indexOf(item.especialidad);
          if(index === -1)
          {
            this.especialidades.push(item.especialidad);
          }
        }
      }   
      await this.getEspecialista();
      console.log(this.especialidades);
      this.turnosMostrar = this.turnos;
    })
  }

  ngOnInit(): void {
  }

  limpiarFiltros(){
    this.mensaje = '';
    this.turnosMostrar = this.turnos;
  }


  async getEspecialista(){
    let index = 0;
    let especialista: any;
    for(let turno of this.turnos)
    {
      especialista = await this.firestore.getEspecialista(turno.especialista);
      turno.especialistaCompleto = especialista;
      this.especialistas.push(especialista);
    }

    this.especialistas = this.eliminarObjetosDuplicados(this.especialistas, 'dni');
    console.log(this.especialistas);
  }

  eliminarObjetosDuplicados(arr: any, prop: any) {
    var nuevoArray: any = [];
    var lookup: any  = {};

    for (let i in arr) {
        lookup[arr[i][prop]] = arr[i];
    }

    for (let i in lookup) {
        nuevoArray.push(lookup[i]);
    }

    return nuevoArray;
  }

  seleccionarEspecialista(especialista: any){
    this.turnosMostrar = [];
    this.especialista = especialista;
    for(let turno of this.turnos)
    {
      if(turno.especialista === especialista.dni)
      {
        this.turnosMostrar.push(turno);
      }
    }

    if(this.turnosMostrar.length === 0)
    {
      this.mensaje = "No hay turnos con el especialista seleccionado";
    }
  }

  seleccionarEspecialidad(especialidad: any){
    this.mensaje = '';
    this.turnosMostrar = [];
    this.especialidad = especialidad;
    for(let turno of this.turnos)
    {
      if(turno.especialidad === especialidad)
      {
        this.turnosMostrar.push(turno);
      }
    }

    if(this.turnosMostrar.length === 0)
    {
      this.mensaje = "No hay turnos con la especialidad seleccionada";
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

  enviarTurno(turno: any){

  }

}