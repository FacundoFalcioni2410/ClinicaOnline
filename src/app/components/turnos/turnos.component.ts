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
  array: any = [];
  searchParam = '';

  mensaje: string = '';

  constructor(public firestore: FirestoreService) {
    this.firestore.especialidadesObs.subscribe(res => {
      this.especialidades = res;
      this.firestore.turnosObs.subscribe(async (value: any) => {
        this.turnos = value;
        let index;

        for (let item of this.turnos) {
          for(let aux of this.especialidades)
          {
            if(aux.especialidad === item.especialidad)
            {
              index = this.array.indexOf(aux);
              if (index === -1) {
                this.array.push(aux)
              }
            }
          }
        }

        await this.getPacientes();
        await this.getEspecialistas();

        this.turnosMostrar = this.turnos;
      });
    });
  }

  ngOnInit(): void {
  }

  async getPacientes() {

    for (let turno of this.turnos) {
      turno.pacienteCompleto = await this.firestore.getPaciente(turno.paciente);
    }
  }

  async getEspecialistas() {

    let index = 0;
    this.especialistas = [];
    let especialista: any;
    for (let turno of this.turnos) {
      especialista = await this.firestore.getEspecialista(turno.especialista);
      turno.especialistaCompleto = especialista;
      this.especialistas.push(especialista);
    }

    this.especialistas = this.eliminarObjetosDuplicados(this.especialistas, 'dni');
  }

  limpiarFiltros() {
    this.mensaje = '';
    this.turnosMostrar = this.turnos;
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
      if (turno.especialidad === objeto.especialidad) {
        this.turnosMostrar.push(turno);
      }
    }

    if (this.turnosMostrar.length === 0) {
      this.mensaje = "No hay turnos con la especialidad seleccionada";
    }
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


  async cancelarTurno(turno: any) {
    let i = 0;
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
        autocomplete: 'off',
      },
    });

    if (razon) {
      turno.estado = 'cancelado';
      turno.razon = razon;
      this.firestore.modificarEstadoTurno(turno);

      for(let [index, value] of turno.pacienteCompleto.turno.entries())
      {
        if(turno.fecha === value.fecha && turno.hora === value.hora)
        {
          i = index;
          break; 
        }
      }


      turno.pacienteCompleto.turno.splice(i, 1);
      this.firestore.finalizarTurnoPaciente(turno.pacienteCompleto);

      for(let [index, value] of turno.especialistaCompleto.turno.entries())
      {
        if(turno.fecha === value.fecha && turno.hora === value.hora)
        {
          i = index;
          break; 
        }
      }
      turno.especialistaCompleto.turno.splice(i, 1);
      this.firestore.finalizarTurnoEspecialista(turno.especialistaCompleto);
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

          if(turno.pacienteCompleto?.dni?.toString().toLowerCase().trim().includes(this.searchParam) || turno.pacienteCompleto?.apellido?.toLowerCase().trim().includes(this.searchParam) || turno.pacienteCompleto?.edad?.toString().toLowerCase().trim().includes(this.searchParam) || turno.pacienteCompleto?.email?.toLowerCase().trim().includes(this.searchParam) || turno.pacienteCompleto?.nombre?.toLowerCase().trim().includes(this.searchParam) || turno.pacienteCompleto?.obraSocial?.includes(this.searchParam) || turno.pacienteCompleto?.perfil?.toLowerCase().trim().includes(this.searchParam))
          {
            this.turnosMostrar.push(turno);
          }
        if(turno?.historiaClinica)
        {
            if(turno?.historiaClinica?.dinamico1?.clave?.toLowerCase().trim().includes(this.searchParam) || turno?.historiaClinica?.dinamico1?.valor?.toLowerCase().trim().includes(this.searchParam) || turno?.historiaClinica.dinamico1.clave?.toLowerCase().trim().includes(this.searchParam) || turno?.historiaClinica?.dinamico2?.valor?.toLowerCase().trim().includes(this.searchParam) || turno?.historiaClinica?.dinamico2?.clave?.toLowerCase().trim().includes(this.searchParam) || turno?.historiaClinica?.dinamico3?.valor?.toLowerCase().trim().includes(this.searchParam) || turno?.historiaClinica?.dinamico3?.clave?.toLowerCase().trim().includes(this.searchParam) || turno?.historiaClinica?.altura?.toLowerCase().includes(this.searchParam) || turno?.historiaClinica?.peso?.toLowerCase().includes(this.searchParam) || turno?.historiaClinica?.presion?.toLowerCase().includes(this.searchParam) || turno?.historiaClinica?.temperatura?.toLowerCase().includes(this.searchParam))
            {
              this.turnosMostrar.push(turno);
            }
        }
        if(turno?.especialistaCompleto?.dni?.toString().trim().toLowerCase().includes(this.searchParam) || turno?.especialistaCompleto?.apellido?.toLowerCase().trim().includes(this.searchParam) || turno?.especialistaCompleto?.edad?.toString().toLowerCase().trim().includes(this.searchParam) ||  turno?.especialistaCompleto?.email?.toLowerCase().trim().includes(this.searchParam) || turno?.especialistaCompleto?.nombre?.toLowerCase().trim().includes(this.searchParam))
        {
          this.turnosMostrar.push(turno);
        }
      }
    }
  }

}
