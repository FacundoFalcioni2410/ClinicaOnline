import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-mis-turnos-paciente',
  templateUrl: './mis-turnos-paciente.component.html',
  styleUrls: ['./mis-turnos-paciente.component.scss']
})
export class MisTurnosPacienteComponent implements OnInit {

  turnos: any = [];
  turnosMostrar: any = [];

  pacientes: any = [];
  paciente: any;

  especialistas: any = [];
  especialista: any;

  especialidades: any = [];
  especialidad: any;

  mensaje: string = '';
  test: any;

  constructor(public firestore: FirestoreService) { 
    this.firestore.turnosObs.subscribe( async (value: any) =>{
      this.turnosMostrar = [];
      this.turnos = [];
      this.especialidades = [];
      this.especialistas = [];
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

  async cancelarTurno(turno: any){
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
        required: "true",
        autocomplete: 'off'
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

  verComentario(turno: any){
    if(turno?.comentario)
    {
      Swal.fire({title: 'Comentario sobre el turno',text: turno.comentario});
    }
    else if(turno?.razon)
    {
      Swal.fire({title: 'Motivo de cancelacion/rechazo del turno',text: turno.razon});
    }
    else if(turno.atencion)
    {
      Swal.fire({title: 'Atencion del especialista',text: 'Comentario sobre la atencion: ' + turno.atencion + " - satisfaccion: " + turno.satisfaccion});
    }
  }

  async satisfaccion(turno: any){
    const { value: satisfaccion } = await Swal.fire({
      title: 'Satisfaccion',
      input: 'range',
      inputAttributes: {
        min: '1',
        max: '10',
        step: '1',
      },
      inputLabel: 'Ingrese su nivel de satisfaccion: ',
    });

    if(satisfaccion)
    {
      turno.satisfaccion = satisfaccion;
      turno.atencion = await this.atencion();
      if(turno.atencion)
      {
        this.firestore.modificarEstadoTurno(turno);
      }
    }
  }

  async atencion(){
    const { value: atencion } = await Swal.fire({
      title: 'Atencion del especialista',
      input: 'text',
      inputLabel: 'Ingrese un comentario sobre la atencion del especialista: ',
      inputAttributes:{
        autocomplete: 'off'
      }
    });

    return atencion;
  }

  verEncuesta(){
  }
}

