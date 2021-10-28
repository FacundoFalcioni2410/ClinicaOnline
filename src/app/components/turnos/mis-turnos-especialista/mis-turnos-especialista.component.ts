import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2';

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

  especialidades: any = [];
  array: any = [];
  especialidad: any;

  mensaje: string = '';

  
  constructor(public firestore: FirestoreService) { 
    
    this.especialista = JSON.parse(localStorage.getItem('usuario') as string);
      
      this.firestore.especialidadesObs.subscribe( res =>{
        this.firestore.turnosObs.subscribe( async value =>{
        this.especialidades = res;
        this.turnos = [];
        let index = 0;
        
        for(let item of value)
        {
          if(item.especialista === this?.especialista?.dni)
          {
            this.turnos.push(item);
            for(let especialidad of this.especialista.especialidad)
            {
              for(let aux of this.especialidades)
              {
                if(especialidad === aux.especialidad)
                {
                  index = this.array.indexOf(aux);
                  if(index === -1)
                  {
                    this.array.push(aux);
                  }
                }  
              }
            }
            
          }
        }
        await this.getPacientes();
        this.turnosMostrar = this.turnos;
      });

     
    });
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

  seleccionarEspecialidad(objeto: any){
    this.mensaje = '';
    this.turnosMostrar = [];
    this.especialidad = objeto.especialidad;
    for(let turno of this.turnos)
    {
      if(turno.especialidad === this.especialidad)
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

  async rechazarTurno(turno: any){
    const { value: razon } = await Swal.fire({
      title: 'Finalizar turno',
      input: 'text',
      inputLabel: 'Ingrese un la razon por la que rechaza el turno: ',
      inputAttributes:{
        autocomplete: 'off'
      }
    });

    if(razon)
    {
      turno.estado = "rechazado";
      turno.razon = razon;
      this.firestore.modificarEstadoTurno(turno);
    }
  }

  async cancelarTurno(turno: any){
    const { value: razon } = await Swal.fire({
      title: 'Finalizar turno',
      input: 'text',
      inputLabel: 'Ingrese la razon por la que cancela el turno: ',
      inputAttributes:{
        autocomplete: 'off'
      }
    });

    if(razon)
    {
      turno.estado = "cancelado";
      turno.razon = razon;
      this.firestore.modificarEstadoTurno(turno);
    }
  }

  async finalizarTurno(turno: any){
    const { value: comentario } = await Swal.fire({
      title: 'Finalizar turno',
      input: 'text',
      inputLabel: 'Ingrese un comentario sobre el turno: ',
      inputAttributes:{
        autocomplete: 'off'
      }
    });

    if(comentario)
    {
      turno.estado = "realizado";
      turno.comentario = comentario;
      this.firestore.modificarEstadoTurno(turno);
    }
  }

  verComentario(turno: any){
    if(turno?.satisfaccion)
    {
      Swal.fire({title: 'Comentario sobre el turno',text: `Satisfaccion del paciente: ${turno.satisfaccion}, comentario del paciente: ${turno.atencion}`});
    }
    else if(turno?.razon)
    {
      Swal.fire({title: 'Motivo de cancelacion/rechazo del turno',text: turno.razon});
    }
  }
}