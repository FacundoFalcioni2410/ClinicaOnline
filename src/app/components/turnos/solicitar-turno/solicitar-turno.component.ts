import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-solicitar-turno',
  templateUrl: './solicitar-turno.component.html',
  styleUrls: ['./solicitar-turno.component.scss']
})
export class SolicitarTurnoComponent implements OnInit {
  
  //Entidades
  pacientes: any;
  especialistas: any;
  especialidadActual = '';
  especialista: any;
  paciente: any = null;
  
  //Especialiades | Turnos
  array: any = [];
  especialidades: any;

  turnos: any = [];
  turnosM: any = [];
  turnosT: any = [];

  //Fecha
  fechas: any = [];
  fechasEspecialistaActual: any = [];
  fechaSeleccionada: any;
  fecha: string = '';
  hora: string = '';
  
  mensaje = '';
  recibido = false;
  
  constructor(public firestore: FirestoreService, private datePipe: DatePipe) {
    this.turnosM = ["08:00","08:30", "09:00","09:30","10:00","10:30","11:00","11:30", "12:00","12:30"];
    this.turnosT = ["13:00","13:30","14:00","14:30", "15:00","15:30","16:00","16:30","17:00","17:30", "18:00", "18:30"];
    this.turnos = ["08:00","08:30", "09:00","09:30","10:00","10:30","11:00","11:30", "12:00","12:30", "13:00","13:30","14:00","14:30", "15:00","15:30","16:00","16:30","17:00","17:30", "18:00", "18:30"];
    
    this.getEspecialidades();
    this.getEspecialistas();
    this.getPacientes();

    this.obtenerProximosDias(new Date, 15);
  }

  ngOnInit(): void {
  }
  
  cambiarEspecialista(especialista: any){
    if(this.firestore.usuarioActual?.perfil === "paciente" && !this.paciente)
    {
      this.paciente = this.firestore.usuarioActual;
    }

    if(this.especialista !== especialista)
    {
      this.mensaje = '';
      this.especialista = especialista;
      this.fechasEspecialistaActual = [];

      this.cargarHorarios();
    }
  }

  seleccionarFecha(fecha: any)
  {
    this.fechaSeleccionada = fecha;
  }

  cargarHorarios(){
    if(this.especialista?.horarios)
    {
      for(let item of this.fechas)
      {
        for(let horario of this.especialista?.horarios)
        {
          let turnoDia: any;

          if(item.getDay() === horario.dia)
          {

            if(item.getDay() !== 6)
            {
              if(horario.turno === 'T-M')
              {
                turnoDia = {
                  dia: this.datePipe.transform(item, 'dd/MM/yyyy'),
                  turnosDelDia: this.turnos.map((item: any) => item)
                }

              }
              else if(horario.turno === 'M')
              {
                turnoDia = {
                  dia: this.datePipe.transform(item, 'dd/MM/yyyy'),
                  turnosDelDia: this.turnosM.map((item: any) => item),
                }
              }
              else
              {
                turnoDia = {
                  dia: this.datePipe.transform(item, 'dd/MM/yyyy'),
                  turnosDelDia: this.turnosT.map((item: any) => item),
                }
              }
            }
            else
            {
              turnoDia = {
                dia: this.datePipe.transform(item, 'dd/MM/yyyy'),
                turnosDelDia: this.turnosM.map((item: any, index: any) =>{
                  if(index < 13)
                  {
                    return item;
                  }
                }),
              }
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
                  }
                }
              }
            }
            this.fechasEspecialistaActual.push(turnoDia);
          }
        }
      }
    }
    else
    {
      this.mensaje = "El especialista no tiene disponibilidad horaria";
    }
  }

  seleccionarHora(hora: any){
    this.hora = hora;
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
    this.hora = '';
    this.fechaSeleccionada = null;
    this.especialidadActual = especialidad;
    this.array = this.especialistas.filter( (item: any) =>{
      let flag = false;
      for(let aux of item.especialidad)
      {
        if(especialidad === aux)
        {
          flag = true;
          break;
        }
      }
      
      return flag ? item : null;
    });
  }

  solicitarTurno(){
    let turno = {
      fecha: this.fechaSeleccionada.dia,
      hora: this.hora,
      dniPaciente: this.paciente.dni,
      especialidad: this.especialidadActual
    }

    if(!this.especialista?.turno)
    {
      this.especialista.turno = [];
    }

    if(!this.paciente?.turno)
    {
      this.paciente.turno = [];
    }

    
    this.especialista.turno.push(turno);
    let objeto: any = {
      especialidad: this.especialidadActual,
      especialista: this.especialista?.dni,
      fecha: this.fechaSeleccionada.dia,
      hora: this.hora
    }
    this.paciente.turno.push(objeto);

    this.firestore.addTurnoPaciente(this.paciente.turno, this.paciente.id);
    this.firestore.addTurnoEspecialista(this.especialista);

    objeto.especialista = this.especialista.dni;
    objeto.paciente = this.paciente.dni;
    objeto.estado = 'pendiente';

    this.firestore.addTurno(objeto);

    Swal.fire({text: 'Turno sacado con exito', timer: 2000,timerProgressBar: true, icon: 'success', toast: true, position: 'bottom'});
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