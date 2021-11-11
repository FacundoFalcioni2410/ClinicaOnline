import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2';

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
    this.firestore.especialistaCollectionReference.doc(especialista.id).update({habilitado: !especialista.habilitado});
    if(especialista.habilitado)
    {
      Swal.fire({'text': 'Especialista deshabilitado', toast: true, timer: 1500, timerProgressBar: true, position: 'bottom', icon: 'success'});
    }
    else
    {
      Swal.fire({'text': 'Especialista habilitado', toast: true, timer: 1500, timerProgressBar: true, position: 'bottom', icon: 'success'});
    }
  }

}
