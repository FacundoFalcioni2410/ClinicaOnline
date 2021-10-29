import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-tabla-especialista',
  templateUrl: './tabla-especialista.component.html',
  styleUrls: ['./tabla-especialista.component.scss']
})
export class TablaEspecialistaComponent implements OnInit {

  spinner: string = "../../../../assets/spinnerImage.gif";
  @Input() especialistas: any;

  constructor(private firestore: FirestoreService) {
  }

  ngOnInit(): void {
  }

  actualizarEstado(especialista: any){
    this.firestore.especialistaCollectionReference.doc(especialista.id).update({habilitado: !especialista.habilitado})
  }

}
