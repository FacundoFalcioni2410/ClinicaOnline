import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.scss']
})
export class MiPerfilComponent implements OnInit {

  usuario: any;
  horarios: boolean = false;
  verHorariosBtn: string = 'Ver horarios';
  defaultImage = '../../../assets/spinnerImage.gif';
  historiaClinica: boolean = false;
  botonHistoriaClinica: string = 'Ver';

  constructor(public firestore: FirestoreService) {    
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(){
    setTimeout(() =>{
      this.usuario = this.firestore.usuarioActual;
    },1000);
  }

  toggleHistoriaClinica(){
    this.historiaClinica = !this.historiaClinica;
    if(this.historiaClinica)
    {
      this.botonHistoriaClinica = "Ocultar";
    }
    else
    {
      this.botonHistoriaClinica = "Ver";
    }
  }

  verHorarios(){
    this.horarios = !this.horarios;
    if(this.horarios)
    {
      this.verHorariosBtn = "Ocultar horarios";
    }
    else
    {
      this.verHorariosBtn = "Ver horarios";
    }
  }
}
