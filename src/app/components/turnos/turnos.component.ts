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
  turnosMostrar: any;

  paciente: any;
  
  especialistas: any;
  especialista: any;

  especialidades: any;
  especialidad: any;

  mensaje: string = '';

  constructor(public firestore: FirestoreService) { 
    this.firestore.turnosObs.subscribe( async value =>{
      this.turnos = value;
      this.especialidades = [];
      let index;

      for(let item of this.turnos)
      {
        index = this.especialidades.indexOf(item.especialidad);
        if(index === -1)
        {
          this.especialidades.push(item.especialidad)
        }

      }


      await this.getPacientes();
      await this.getEspecialistas();
      // await this.getEspecialistas();

      console.log(this.turnos);
      this.turnosMostrar = this.turnos;
    })
  }

  async getPacientes(){    
    
    for(let turno of this.turnos)
    {
      turno.pacienteCompleto = await this.firestore.getPaciente(turno.paciente);
    }
  }

  async getEspecialistas(){    
    
    let index = 0;
    this.especialistas = [];
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

  limpiarFiltros(){
    this.mensaje = '';
    this.turnosMostrar = this.turnos;
  }

  seleccionarEspecialista(especialista: any){
    this.turnosMostrar = [];
    this.especialista = especialista;
    for(let turno of this.turnos)
    {
      if(turno.especialista === especialista.dni)
      {
        this.turnosMostrar.push(turno);
        // this.especialistas.push(turno.especialistaCompleto);
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

  // async getEspecialistas(){
  //   let index = 0;
  //   let especialista: any;
  //   for(let turno of this.turnos)
  //   {
  //     especialista = await this.firestore.getEspecialista(turno.especialista);
  //     turno.especialistaCompleto = especialista;
  //     this.especialistas.push(especialista);
  //   }

  //   this.especialistas = this.eliminarObjetosDuplicados(this.especialistas, 'dni');
  //   console.log(this.especialistas);
  // }

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
