import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-mis-turnos-especialista',
  templateUrl: './mis-turnos-especialista.component.html',
  styleUrls: ['./mis-turnos-especialista.component.scss']
})
export class MisTurnosEspecialistaComponent implements OnInit {

  turnos: any = [];
  turnosMostrar: any = [];

  pacientes: any = [];
  paciente: any;

  especialistas: any;
  especialista: any;

  especialidades: any;
  especialidad: any;

  mensaje: string = '';

  
  constructor(public firestore: FirestoreService) { 
    this.firestore.turnosObs.subscribe( async value =>{
      this.especialista = JSON.parse(localStorage.getItem('usuario') as string);
      for(let item of value)
      {
        if(item.especialista === this.especialista.dni)
        {
          this.turnos.push(item);
        }
      }

      this.turnosMostrar = this.turnos;
      
      await this.getPacientes();
      this.firestore.especialidadesObs.subscribe(value =>{
        this.especialidades = value;
      });

      console.log(this.turnos);
    })
  }

  ngOnInit(): void {
  }

  limpiarFiltros(){
    this.mensaje = '';
    this.turnosMostrar = this.turnos;
  }

  async getPacientes(){
    let index = 0;
    let paciente: any;
    for(let turno of this.turnos)
    {
      paciente = await this.firestore.getPaciente(turno.paciente);
      turno.pacienteCompleto = paciente;
      this.pacientes.push(paciente);
    }

    this.pacientes = this.eliminarObjetosDuplicados(this.pacientes, 'dni')
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

  seleccionarPaciente(paciente: any){
    this.turnosMostrar = [];
    this.paciente = paciente;
    for(let turno of this.turnos)
    {
      if(turno.paciente === paciente.dni)
      {
        this.turnosMostrar.push(turno);
      }
    }

    if(this.turnosMostrar.length === 0)
    {
      this.mensaje = "No hay turnos con el paciente seleccionado";
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