import { Especialista } from './../models/especialista';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Paciente } from '../models/paciente';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  pacienteCollectionReference: any;
  pacientesObs: Observable<Paciente>;
  especialistaCollectionReference: any;
  especialistasObs: Observable<Especialista>;

  constructor(private af: AngularFirestore) {
    this.pacienteCollectionReference = this.af.collection<Paciente>('pacientes');
    this.pacientesObs = this.pacienteCollectionReference.valueChanges({idField: 'id'});
    this.especialistaCollectionReference = this.af.collection<Especialista>('especialistas');
    this.especialistasObs = this.especialistaCollectionReference.valueChanges({idField: 'id'});
  }

  getPacientes(){
    return this.pacientesObs;
  }

  getEspecialistas(){
    return this.especialistasObs;
  } 

  addPaciente(paciente: Paciente){
    this.pacienteCollectionReference.add({...paciente})
  }

  addEspecialista(especialista: Especialista)
  {
    this.especialistaCollectionReference.add({...especialista});
  }
}
