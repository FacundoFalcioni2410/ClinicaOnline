import { Especialista } from './../models/especialista';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Paciente } from '../models/paciente';
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { min, take } from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  pacienteCollectionReference: any;
  pacientesObs: Observable<Paciente>;
  especialistaCollectionReference: any;
  especialistasObs: Observable<Especialista>;
  especialidadesCollectionReference: any;
  especialidadesObs: Observable<any>;
  adminCollectionReference: any;
  adminObs: Observable<any>;
  turnosCollectionReference: any;
  turnosObs: Observable<any>;
  usuarioActual: any;
  isLogged = false;
  encuestasCollectionReference: any;
  encuestaObs: any;

  constructor(private af: AngularFirestore, private auth: AngularFireAuth) {
    
    this.pacienteCollectionReference = this.af.collection<Paciente>('pacientes');
    this.pacientesObs = this.pacienteCollectionReference.valueChanges({idField: 'id'});
    this.especialistaCollectionReference = this.af.collection<Especialista>('especialistas');
    this.especialistasObs = this.especialistaCollectionReference.valueChanges({idField: 'id'});
    this.adminCollectionReference = this.af.collection('administradores');
    this.adminObs = this.adminCollectionReference.valueChanges({idField: 'id'});
    this.especialidadesCollectionReference = this.af.collection('especialidades');
    this.especialidadesObs = this.especialidadesCollectionReference.valueChanges({idField: 'id'});
    this.turnosCollectionReference = this.af.collection('turnos');
    this.turnosObs = this.turnosCollectionReference.valueChanges({idField: 'id'});
    this.encuestasCollectionReference = this.af.collection('encuestas');
    this.encuestaObs = this.encuestasCollectionReference.valueChanges({idField: 'id'});
  }

  getPacientes(){
    return this.pacientesObs;
  }

  getEspecialistas(){
    return this.especialistasObs;
  }

  getAdmins(){
    return this.adminObs;
  }

  getLogs(){
    return this.af.collection('log').valueChanges({idField: 'id'});
  }

  addPaciente(paciente: Paciente){
    this.pacienteCollectionReference.add({...paciente})
  }

  addEspecialidad(especialidad: any)
  {
    this.especialidadesCollectionReference.add(especialidad);
  }

  updateEspecialista(horarios: any, id: string){
    this.af.collection('especialistas').doc(id).update({horarios: horarios});
  }

  addTurnoPaciente(turno: any, id: string){
    this.af.collection('pacientes').doc(id).update({turno: turno});
  }

  addTurnoEspecialista(especialista: any){
    this.af.collection('especialistas').doc(especialista.id).update(especialista);
  }

  addAdmin(admin: any){
    this.adminCollectionReference.add({...admin})
  }

  addTurno(turno: any){
    this.turnosCollectionReference.add(turno);
  }

  finalizarTurnoPaciente(paciente: any){
    this.pacienteCollectionReference.doc(paciente.id).update({turno: paciente.turno})
  }

  addHistoriaClinica(paciente: any){
    this.pacienteCollectionReference.doc(paciente.id).update({historiaClinica: paciente.historiaClinica})
  }

  addHistoriaTurno(turno: any){
    this.turnosCollectionReference.doc(turno.id).update({historiaClinica: turno.historiaClinica})
  }

  finalizarTurnoEspecialista(especialista: any){
    this.especialistaCollectionReference.doc(especialista.id).update({turno: especialista.turno})
  }

  addEspecialista(especialista: Especialista)
  {
    this.especialistaCollectionReference.add({...especialista});
  }

  addEncuesta(encuesta: any){
    this.encuestasCollectionReference.add(encuesta);
  }

  modificarEstadoTurno(turno: any){
    if(turno.razon)
    {
      this.turnosCollectionReference.doc(turno.id).update({estado: turno.estado, razon: turno.razon});
    }
    else if(turno.comentario)
    {
      this.turnosCollectionReference.doc(turno.id).update({estado: turno.estado, comentario: turno.comentario});
    }
    else
    {
      this.turnosCollectionReference.doc(turno.id).update({estado: turno.estado});
    }
  }

  addSatisfaccionAtencion(turno: any){
    this.turnosCollectionReference.doc(turno.id).update({satisfaccion: turno.satisfaccion, atencion: turno.atencion});
  }

  addEncuestaTurno(turno: any, encuesta: any){
    this.turnosCollectionReference.doc(turno.id).update({encuesta: encuesta});
  }

  guardarLog(){
    let day = new Date();
    let hora: any = day.getHours();
    let minutos: any = day.getMinutes();

    if(hora < 10)
    {
      hora = '0' + hora;
    }

    if(minutos < 10)
    {
      minutos = '0' + minutos;
    }

    let log = {
      usuario: this.usuarioActual.email,
      hora: hora + ':' + minutos,
      fecha: day.getDate() + '/' + ( day.getMonth() + 1 ) + '/' + day.getFullYear(),
    }
    this.af.collection('log').add(log);
  }

  async getUser(email: string){

    let usuario = await this.af.collection('administradores', ref => ref.where('email', '==', email).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();
    if(usuario.length === 0)
    {
      usuario = await this.af.collection('pacientes', ref => ref.where('email', '==', email).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();
    }
    if(usuario.length === 0)
    {
      usuario = await this.af.collection('especialistas', ref => ref.where('email', '==', email).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();
    }
    this.usuarioActual = usuario[0];

    return usuario[0];
  }

  async getGenerico(coleccion: any, campo: any, valor: any){
    return await this.af.collection(coleccion, ref => ref.where(campo, '==', valor).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();
  }
  
  async getPaciente(dni: number){
    let paciente = await this.af.collection('pacientes', ref => ref.where('dni', '==', dni).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();

    return paciente[0];
  }

  async getEspecialista(dni: number){
    let paciente = await this.af.collection('especialistas', ref => ref.where('dni', '==', dni).limit(1)).valueChanges({idField: 'id'}).pipe(take(1)).toPromise();

    return paciente[0];
  }
}
