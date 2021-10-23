import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-solicitar-turno',
  templateUrl: './solicitar-turno.component.html',
  styleUrls: ['./solicitar-turno.component.scss']
})
export class SolicitarTurnoComponent implements OnInit {

  pacientes: any;
  especialidades: any;
  especialistas: any;
  especialidadActual = '';
  array: any = [];
  paciente: any;
  especialista: any;
  recibido = false;
  fechas: any = [];
  fechasEspecialistaActual: any = [];
  turnos: any = [];
  fechaSeleccionada: any;
  fecha: string = '';
  hora: string = '';

  constructor(public firestore: FirestoreService, private datePipe: DatePipe) {
    this.turnos = ["08:00","08:30", "09:00","09:30","10:00","10:30","11:00","11:30", "12:00","12:30","13:00","13:30","14:00","14:30", "15:00","15:30","16:00","16:30","17:00","17:30", "18:00", "18:30"];
    this.getEspecialidades();
    this.getEspecialistas();
    this.getPacientes();

    this.obtenerProximosDias(new Date, 15);
  }

  ngOnInit(): void {
  }
  
  cambiarEspecialista(especialista: any){
    if(this.especialista !== especialista)
    {
      this.especialista = especialista;

      for(let item of this.fechas)
      {
        for(let horario of this.especialista.horarios)
        {
          let turnoDia: any;

          if(item.getDay() === horario)
          {
            turnoDia = {
              dia: this.datePipe.transform(item, 'dd/MM/yyyy'),
              turnosDelDia: this.turnos.map((item: any) => item),
            }

            if(this.especialista?.turno?.length)
            {
              for(let turno of this.especialista.turno)
              {
                if(turno.fecha === turnoDia.dia)
                {
                  let index = turnoDia.turnosDelDia.indexOf(turno.hora);
                  if(index !== -1)
                  {
                    let borrado = turnoDia.turnosDelDia.splice(index,1);
                    console.log(borrado[0]);
                  }
                }
              }
            }

            this.fechasEspecialistaActual.push(turnoDia);
          }
        }
      }
      console.log(this.fechasEspecialistaActual);
    }
  }

  seleccionarFecha(fecha: any)
  {
    this.fechaSeleccionada = fecha;
  }

  seleccionarHora(hora: any){
    this.hora = hora;
    console.log('El turno es el dia: ', this.fechaSeleccionada.dia, ' a la hora: ', this.hora);
  }

  getEspecialidades(){
    this.firestore.especialidadesObs.subscribe( value =>{
      this.especialidades = value;
    });
  }

  getEspecialistas(){
    this.firestore.especialistasObs.subscribe( value =>{
      this.especialistas = value;
    });
  }

  getPacientes(){
    this.firestore.pacientesObs.subscribe( value =>{
      this.pacientes = value;
    });
  }

  cambioEspecialidad(especialidad: any){
    this.especialidadActual = especialidad;
    this.array = this.especialistas.filter( (item: any) =>{
      return item.especialidad === especialidad ? item : null;
    });
  }

  solicitarTurno(){
    console.log(this.paciente);
    let nombreEspecialista = `${this.especialista.nombre} ${this.especialista?.apellido}`;
    let turno = {
      fecha: this.fechaSeleccionada.dia,
      hora: this.hora,
      dniPaciente: this.recibido ? this.paciente.dni : this.firestore?.usuarioActual?.dni,
      especialidad: this.especialidadActual
    }

    if(!this.especialista?.turno)
    {
      this.especialista.turno = [];
    }

    this.especialista.turno.push(turno);
    let objeto: any = {
      especialidad: this.especialidadActual,
      especialista: nombreEspecialista,
      fecha: this.fechaSeleccionada.dia,
      hora: this.hora
    }
    this.recibido ? this.firestore.addTurnoPaciente(objeto, this.paciente.id) : this.firestore.addTurnoPaciente(objeto, this.firestore?.usuarioActual?.id);
    this.firestore.addTurnoEspecialista(this.especialista);

    objeto.especialista = this.especialista.dni;
    objeto.paciente = this.recibido ? this.paciente.dni : this.firestore.usuarioActual?.dni;
    objeto.estado = 'pendiente';

    this.firestore.addTurno(objeto);
  }

  obtenerProximosDias(fecha: any, dias: number){
    for(let i = 0; i < dias; i++)
    {
      fecha.setDate(fecha.getDate() + 1);
      this.fechas.push(new Date(fecha));
    }
  }

  recibirPaciente(paciente: any){
    this.recibido = true;
    this.paciente = paciente;
  }
}
