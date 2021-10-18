import { Especialista } from './../models/especialista';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Paciente } from '../models/paciente';
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  pacienteCollectionReference: any;
  pacientesObs: Observable<Paciente>;
  especialistaCollectionReference: any;
  especialistasObs: Observable<Especialista>;
  adminCollectionReference: any;
  adminObs: Observable<any>;
  usuarioActual: any;

  constructor(private af: AngularFirestore) {
    this.pacienteCollectionReference = this.af.collection<Paciente>('pacientes');
    this.pacientesObs = this.pacienteCollectionReference.valueChanges({idField: 'id'});
    this.especialistaCollectionReference = this.af.collection<Especialista>('especialistas');
    this.especialistasObs = this.especialistaCollectionReference.valueChanges({idField: 'id'});
    this.adminCollectionReference = this.af.collection('administradores');
    this.adminObs = this.adminCollectionReference.valueChanges({idField: 'id'});
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

  addAdmin(admin: any){
    this.adminCollectionReference.add({...admin})
  }

  addEspecialista(especialista: Especialista)
  {
    this.especialistaCollectionReference.add({...especialista});
  }

  async getUser(email: string){
    console.log(email);

    this.usuarioActual = await this.af.collection('administradores', ref => ref.where('email', '==', email).limit(1)).valueChanges().pipe(take(1)).toPromise();
    if(this.usuarioActual.length === 0)
    {
      this.usuarioActual = await this.af.collection('pacientes', ref => ref.where('email', '==', email).limit(1)).valueChanges().pipe(take(1)).toPromise();
    }
    if(this.usuarioActual.length === 0)
    {
      this.usuarioActual = await this.af.collection('especialistas', ref => ref.where('email', '==', email).limit(1)).valueChanges().pipe(take(1)).toPromise();
    }
    
    return this.usuarioActual;
  }
}
