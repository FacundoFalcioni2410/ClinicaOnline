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

  getUser(email: string){
    console.log(email);
    let pacientes: any = [];
    let especialistas: any = [];
    let admins: any = [];

    this.getEspecialistas().subscribe( value =>{
      especialistas = value;

      for(let item of especialistas)
      {
        if(item.email === email)
        {
          this.usuarioActual = item;
        }
      }
    });

    this.getPacientes().subscribe( value =>{
      pacientes = value;

      for(let item of pacientes)
      {
        if(item.email === email)
        {
          this.usuarioActual = item;
        }
      }
    });

    this.getAdmins().subscribe( value =>{
      admins = value;

      for(let item of admins)
      {  
        if(item.email === email)
        {
          this.usuarioActual = item;
        }
      }
    });
  }
}
