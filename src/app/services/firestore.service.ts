import { Especialista } from './../models/especialista';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Paciente } from '../models/paciente';
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { take } from 'rxjs/operators'
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

  constructor(private af: AngularFirestore, private auth: AngularFireAuth) {
    this.auth.user.subscribe( async res =>{
      if(res?.uid)
      {
        await this.getUser(res?.email!);
      }

      if(res === null)
      {
        this.usuarioActual = null;
      }
    });

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

  addPaciente(paciente: Paciente){
    this.pacienteCollectionReference.add({...paciente})
  }

  addEspecialidad(especialidad: any)
  {
    this.especialidadesCollectionReference.add({especialidad: especialidad});
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

  addEspecialista(especialista: Especialista)
  {
    this.especialistaCollectionReference.add({...especialista});
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
  }

  async getUser(email: string){

    if(this.isLogged)
    {
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

    return null;
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
