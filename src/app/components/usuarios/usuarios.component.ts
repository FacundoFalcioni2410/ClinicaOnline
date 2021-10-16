import { FirestoreService } from 'src/app/services/firestore.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: any = null;
  mostrarPacientes: boolean = true;
  mostrarEspecialistas: boolean = false;
  mostrarAdministradores: boolean = false;
  pacientes: any;
  especialistas: any;
  administradores: any;
  tipoUser: string = 'Pacientes ';

  constructor(private firestore: FirestoreService) {
    this.getUsers();
  }
  
  ngOnInit(): void {
  }

  getUsers(){
    this.firestore.getPacientes().subscribe(pacientes =>{
      setTimeout(()=>{
        this.pacientes = pacientes;
        this.usuarios = pacientes;
      },1000)
    });
    this.firestore.getEspecialistas().subscribe(especialistas =>{
      this.especialistas = especialistas;
    });
    this.firestore.getAdmins().subscribe(administradores =>{
      this.administradores = administradores;
    });
  }

  cambiarTipoUser(tipo: string){
    this.tipoUser = tipo
    if(this.tipoUser === 'Pacientes')
    {
      this.usuarios = null;
      setTimeout(() =>{
        this.usuarios = this.pacientes;
      },800)
    }
    else if(this.tipoUser === 'Especialistas')
    {
      this.usuarios = null;
      setTimeout(() =>{
        this.usuarios = this.especialistas;
      },800)
    }
    else
    {
      this.usuarios = null;
      setTimeout(() =>{
        this.usuarios = this.administradores;
      },800)
    }
  }
}
