import { FirestoreService } from 'src/app/services/firestore.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  defaultImage = '../../../assets/spinnerImage.gif';
  registroAdministrador: boolean = false;
  usuarios: any = null;
  mostrarPacientes: boolean = true;
  mostrarEspecialistas: boolean = false;
  mostrarAdministradores: boolean = false;
  pacientes: any;
  especialistas: any;
  administradores: any;
  tipoUser: string = 'Pacientes';
  detalle = false;
  botonDetalle = `Ver ${this.tipoUser} en detalle`;

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
        console.log(this.usuarios);
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
    console.log(this.especialistas);
    this.tipoUser = tipo
    this.registroAdministrador = false;
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

  getAdmins(){
    this.firestore.getAdmins().subscribe( admins =>{
      this.usuarios = admins;
    })
  }

  recibirEstado(value: any){
    this.registroAdministrador = value;
    this.cambiarTipoUser('Administradores');
  }

  toggleDetalle(){
    this.detalle = !this.detalle;
    if(!this.detalle)
    {
      this.botonDetalle = `Ver ${this.tipoUser} en detalle`;
    }
    else
    {
      this.botonDetalle = `Ver ${this.tipoUser} en formato reducido`;
    }
  }
}
