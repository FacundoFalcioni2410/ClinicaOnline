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

  turnoActual: any;

  constructor(public firestore: FirestoreService) {

    this.especialista = JSON.parse(localStorage.getItem('usuario') as string);

    this.firestore.especialidadesObs.subscribe(res => {
      this.firestore.turnosObs.subscribe(async value => {
        this.especialidades = res;
        this.turnos = [];
        let index = 0;

        // for (let item of value) {
        //   if (item.especialista === this?.especialista?.dni) {
        //     this.turnos.push(item);
        //     for (let especialidad of this.especialista.especialidad) {
        //       for (let aux of this.especialidades) {
        //         if (especialidad === aux.especialidad) {
        //           index = this.array.indexOf(aux);
        //           if (index === -1) {
        //             this.array.push(aux);
        //           }
        //         }
        //       }
        //     }

        //   }
        // }
        for (let turno of value) {
          if(turno.especialista === this.especialista.dni)
          {
            this.turnos.push(turno);
            for(let especialidadAll of this.especialidades)
            {
              if(especialidadAll.especialidad === turno.especialidad)
              {
                for(let especialidadActual of this.especialista.especialidad)
                {
                  if(especialidadActual === especialidadAll.especialidad)
                  {
                    index = this.array.indexOf(especialidadAll);
                    console.log('entra, index: ', index)
                    if (index === -1)
                    {
                      this.array.push(especialidadAll);
                    }
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

  limpiarFiltros() {
    this.mensaje = '';
    this.turnosMostrar = this.turnos;
  }

  async getPacientes() {
    let index = 0;
    let paciente: any;
    for (let turno of this.turnos) {
      paciente = await this.firestore.getPaciente(turno.paciente);
      turno.pacienteCompleto = paciente;
      this.pacientes.push(paciente);
    }

    this.pacientes = this.eliminarObjetosDuplicados(this.pacientes, 'dni')
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

  seleccionarPaciente(paciente: any) {
    this.turnosMostrar = [];
    this.paciente = paciente;
    for (let turno of this.turnos) {
      if (turno.paciente === paciente.dni) {
        this.turnosMostrar.push(turno);
      }
    }

    if (this.turnosMostrar.length === 0) {
      this.mensaje = "No hay turnos con el paciente seleccionado";
    }
  }

  seleccionarEspecialidad(objeto: any) {
    this.mensaje = '';
    this.turnosMostrar = [];
    this.especialidad = objeto.especialidad;
    for (let turno of this.turnos) {
      if (turno.especialidad === this.especialidad) {
        this.turnosMostrar.push(turno);
      }
    }

    if (this.turnosMostrar.length === 0) {
      this.mensaje = "No hay turnos con la especialidad seleccionada";
    }
  }

  aceptarTurno(turno: any) {
    turno.estado = "aceptado";
    this.firestore.modificarEstadoTurno(turno);
  }

  async rechazarTurno(turno: any) {
    const { value: razon } = await Swal.fire({
      title: 'Finalizar turno',
      input: 'text',
      inputLabel: 'Ingrese un la razon por la que rechaza el turno: ',
      inputAttributes: {
        autocomplete: 'off'
      }
    });

    if (razon) {
      turno.estado = "rechazado";
      turno.razon = razon;
      this.firestore.modificarEstadoTurno(turno);
    }
  }

  async cancelarTurno(turno: any) {
    let i = 0;
    const { value: razon } = await Swal.fire({
      title: 'Finalizar turno',
      input: 'text',
      inputLabel: 'Ingrese la razon por la que cancela el turno: ',
      inputAttributes: {
        autocomplete: 'off'
      }
    });

    if (razon) {
      turno.estado = "cancelado";
      turno.razon = razon;
      this.firestore.modificarEstadoTurno(turno);
      for (let [index, value] of turno.pacienteCompleto.turno.entries()) {
        if (turno.fecha === value.fecha && turno.hora === value.hora) {
          i = index;
          break;
        }
      }

      turno.pacienteCompleto.turno.splice(i, 1);
      this.firestore.finalizarTurnoPaciente(turno.pacienteCompleto);

      for (let [index, value] of this.especialista.turno.entries()) {
        if (turno.fecha === value.fecha && turno.hora === value.hora) {
          i = index;
          break;
        }
      }
      this.especialista.turno.splice(i, 1);
      this.firestore.finalizarTurnoEspecialista(this.especialista);
    }
  }

  async finalizarTurno() {
    let i = 0;

    let altura = (<HTMLInputElement>document.getElementById('altura')).value;
    let peso = (<HTMLInputElement>document.getElementById('peso')).value;
    let temperatura = (<HTMLInputElement>document.getElementById('temperatura')).value;
    let presion = (<HTMLInputElement>document.getElementById('presion')).value;

    let dinamico1 = {
      clave: (<HTMLInputElement>document.getElementById('dinamicoClave1')).value,
      valor: (<HTMLInputElement>document.getElementById('dinamicoValor1')).value,
    }

    let dinamico2 = {
      clave: (<HTMLInputElement>document.getElementById('dinamicoClave2')).value,
      valor: (<HTMLInputElement>document.getElementById('dinamicoValor2')).value,
    }

    let dinamico3 = {
      clave: (<HTMLInputElement>document.getElementById('dinamicoClave3')).value,
      valor: (<HTMLInputElement>document.getElementById('dinamicoValor3')).value,
    }

    let dinamico4 = {
      clave: (<HTMLInputElement>document.getElementById('dinamicoClave4')).value,
      valor: (<HTMLInputElement>document.getElementById('dinamicoValor4')).value,
    }

    if (altura && peso && presion && temperatura && (dinamico1.clave && dinamico1.valor) && (dinamico2.valor && dinamico2.clave) && (dinamico3.valor && dinamico3.clave) && (dinamico4.valor && dinamico4.clave)) {
      const { value: comentario } = await Swal.fire({
        title: 'Finalizar turno',
        input: 'text',
        inputLabel: 'Ingrese un comentario sobre el turno: ',
        inputAttributes: {
          autocomplete: 'off'
        }
      });

      let historiaClinica = {
        altura: altura,
        peso: peso,
        presion: presion,
        temperatura: temperatura,
        dinamico1: dinamico1,
        dinamico2: dinamico2,
        dinamico3: dinamico3,
        dinamico4: dinamico4,
      }

      if(!this.turnoActual.pacienteCompleto.historiaClinica)
      {
        this.turnoActual.pacienteCompleto.historiaClinica = [];
      }

      this.turnoActual.pacienteCompleto.historiaClinica.push(historiaClinica);

      if (comentario && this.turnoActual.pacienteCompleto.historiaClinica) {
        this.firestore.addHistoriaClinica(this.turnoActual.pacienteCompleto);
        this.turnoActual.estado = "realizado";
        this.turnoActual.comentario = comentario;
        this.firestore.modificarEstadoTurno(this.turnoActual);
        for (let [index, value] of this.turnoActual.pacienteCompleto.turno.entries()) {
          if (this.turnoActual.fecha === value.fecha && this.turnoActual.hora === value.hora) {
            i = index;
            break;
          }
        }


        this.turnoActual.pacienteCompleto.turno.splice(i, 1);
        this.firestore.finalizarTurnoPaciente(this.turnoActual.pacienteCompleto);

        for (let [index, value] of this.especialista.turno.entries()) {
          if (this.turnoActual.fecha === value.fecha && this.turnoActual.hora === value.hora) {
            i = index;
            break;
          }
        }
        this.especialista.turno.splice(i, 1);
        this.firestore.finalizarTurnoEspecialista(this.especialista);
      }
    }
    else {
      Swal.fire({ title: 'Error', text: `Asegurese de completar todos los campos`, toast: true, timer: 1500, icon: 'error', timerProgressBar: true, position: 'bottom' });
    }
  }

  verComentario(turno: any) {
    if (turno?.satisfaccion) {
      Swal.fire({ title: 'Comentario sobre el turno', text: `Satisfaccion del paciente: ${turno.satisfaccion}, comentario del paciente: ${turno.atencion}` });
    }
    else if (turno?.razon) {
      Swal.fire({ title: 'Motivo de cancelacion/rechazo del turno', text: turno.razon });
    }
  }
}