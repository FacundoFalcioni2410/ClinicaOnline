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

  constructor(public firestore: FirestoreService) {
    console.log(this.usuario);
    
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(){
    setTimeout(() =>{
      this.usuario = this.firestore.usuarioActual;
    },1000);
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
