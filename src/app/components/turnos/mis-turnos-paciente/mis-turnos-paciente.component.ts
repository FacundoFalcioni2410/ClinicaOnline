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
  turnoEncuesta: any;

  pacientes: any = [];
  paciente: any;

  especialistas: any = [];
  especialista: any;

  especialidades: any = [];
  especialidad: any;
  array: any = [];

  mensaje: string = '';
  test: any;
  searchParam: string = '';

  constructor(public firestore: FirestoreService) {
    this.paciente = JSON.parse(localStorage.getItem('usuario') as string);
    this.firestore.especialidadesObs.subscribe(res => {
      this.especialidades = res;
      this.firestore.turnosObs.subscribe(async (value: any) => {
        this.turnos = [];
        let index = 0;

        for (let item of value) {
          if (item.paciente === this?.paciente?.dni) {
            this.turnos.push(item);

            for (let aux of this.especialidades) {
              if (item.especialidad === aux.especialidad) {
                index = this.array.indexOf(aux);
                if (index === -1) {
                  this.array.push(aux);
                }
              }
            }

          }
        }
        await this.getEspecialista();
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


  async getEspecialista() {
    let index = 0;
    let especialista: any;
    for (let turno of this.turnos) {
      especialista = await this.firestore.getEspecialista(turno.especialista);
      turno.especialistaCompleto = especialista;
      this.especialistas.push(especialista);
    }

    this.especialistas = this.eliminarObjetosDuplicados(this.especialistas, 'dni');
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

  seleccionarEspecialista(especialista: any) {
    this.turnosMostrar = [];
    this.especialista = especialista;
    for (let turno of this.turnos) {
      if (turno.especialista === especialista.dni) {
        this.turnosMostrar.push(turno);
      }
    }

    if (this.turnosMostrar.length === 0) {
      this.mensaje = "No hay turnos con el especialista seleccionado";
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

  async cancelarTurno(turno: any) {
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
        else {
          return '';
        }
      },
      inputAttributes: {
        required: "true",
        autocomplete: 'off'
      },
    });

    if (razon) {
      turno.estado = 'cancelado';
      turno.razon = razon;
      this.firestore.modificarEstadoTurno(turno);
    }
    else {
      Swal.fire({ text: 'El turno no ha podido ser cancelado. Motivo: Debe especificar una razon', timer: 2500, timerProgressBar: true, icon: 'error', position: 'bottom', toast: true });
    }
  }

  verComentario(turno: any) {
    if (turno?.comentario) {
      Swal.fire({ title: 'Comentario sobre el turno', text: turno.comentario });
    }
    else if (turno?.razon) {
      Swal.fire({ title: 'Motivo de cancelacion/rechazo del turno', text: turno.razon });
    }
  }

  async satisfaccion() {
    let satisfaccion = (document.getElementById("satisfaccion") as HTMLInputElement).value;
    (document.getElementById("satisfaccion") as HTMLInputElement).value = '';
    let atencion: any;
    if (satisfaccion) {
      atencion = (document.getElementById("atencion") as HTMLInputElement).value;
      (document.getElementById("atencion") as HTMLInputElement).value = '';

      this.turnoEncuesta.satisfaccion = satisfaccion;

      if (atencion) {
        this.turnoEncuesta.atencion = atencion;
        this.firestore.addSatisfaccionAtencion(this.turnoEncuesta);
      }
    }
  }

  enviarEncuesta() {
    (this.turnoEncuesta);
    let tiempo = (document.getElementById("tiempo") as HTMLInputElement).value;
    (document.getElementById("tiempo") as HTMLInputElement).value = '';
    let consulta: any;
    if (tiempo) {
      consulta = (document.getElementById("preguntas") as HTMLInputElement).checked;
      let encuesta = {
        paciente: this.paciente.dni,
        especialidad: this.turnoEncuesta.especialidad,
        especialista: this.turnoEncuesta.especialista,
        datos: {
          tiempoEspera: tiempo,
          consultas: consulta
        }
      };

      let datosEncuesta = {
        tiempoEspera: tiempo,
        consultas: consulta
      }

      this.firestore.addEncuesta(encuesta);
      this.firestore.addEncuestaTurno(this.turnoEncuesta, datosEncuesta);
    }
  }

  filtrar(): any{
    this.searchParam = this.searchParam.trim().toLowerCase().trim();
    this.turnosMostrar = [];
    
    for(let turno of this.turnos)
    {
      if(turno?.comentario?.toLowerCase().trim().includes(this.searchParam) || turno?.especialidad?.toLowerCase().trim().includes(this.searchParam) || turno?.estado?.toLowerCase().trim().includes(this.searchParam) || turno?.fecha?.toLowerCase().trim().includes(this.searchParam) || turno?.hora?.toLowerCase().trim().includes(this.searchParam))
      {
        this.turnosMostrar.push(turno);
      }
      else
      {

          if(turno.especialistaCompleto?.dni?.toString().toLowerCase().trim().includes(this.searchParam) || turno.especialistaCompleto?.apellido?.toLowerCase().trim().includes(this.searchParam) || turno.especialistaCompleto?.edad?.toString().toLowerCase().trim().includes(this.searchParam) || turno.especialistaCompleto?.email?.toLowerCase().trim().includes(this.searchParam) || turno.especialistaCompleto?.nombre?.toLowerCase().trim().includes(this.searchParam) || turno.especialistaCompleto?.obraSocial?.includes(this.searchParam) || turno.especialistaCompleto?.perfil?.toLowerCase().trim().includes(this.searchParam))
          {
            this.turnosMostrar.push(turno);
          }
        if(turno?.historiaClinica)
        {
            if(turno?.historiaClinica.dinamico1.clave?.toLowerCase().trim().includes(this.searchParam) || turno?.historiaClinica.dinamico1.valor?.toLowerCase().trim().includes(this.searchParam) || turno?.historiaClinica.dinamico1.clave?.toLowerCase().trim().includes(this.searchParam) || turno?.historiaClinica.dinamico2.valor?.toLowerCase().trim().includes(this.searchParam) || turno?.historiaClinica.dinamico2.clave?.toLowerCase().trim().includes(this.searchParam) || turno?.historiaClinica.dinamico3.valor?.toLowerCase().trim().includes(this.searchParam) || turno?.historiaClinica.dinamico3.clave?.toLowerCase().trim().includes(this.searchParam) || turno?.historiaClinica?.altura?.toLowerCase().includes(this.searchParam) || turno?.historiaClinica?.peso?.toLowerCase().includes(this.searchParam) || turno?.historiaClinica?.presion?.toLowerCase().includes(this.searchParam) || turno?.historiaClinica?.temperatura?.toLowerCase().includes(this.searchParam))
            {
              this.turnosMostrar.push(turno);
            }
        }
        if(this.paciente?.dni?.toString().trim().toLowerCase().includes(this.searchParam) || this.paciente?.apellido?.toLowerCase().trim().includes(this.searchParam) || this.paciente?.edad?.toString().toLowerCase().trim().includes(this.searchParam) ||  this.paciente?.email?.toLowerCase().trim().includes(this.searchParam) || this.paciente?.nombre?.toLowerCase().trim().includes(this.searchParam))
        {
          this.turnosMostrar.push(turno);
        }
      }
    }
  }
}