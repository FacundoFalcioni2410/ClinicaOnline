import { FirestoreService } from 'src/app/services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { slider } from 'src/app/route-animations';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  animations: [
    slider,
  ]
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
  botonDetalle = `en detalle`;
  allUsers: any = [];
  historiaClinica: any = false;
  botonHistoriaClinica: string = 'Ver';
  pacienteSeleccionado: any;

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
        this.allUsers = this.allUsers.concat(this.pacientes);
      },1000)
    });
    this.firestore.getEspecialistas().subscribe(especialistas =>{
      this.especialistas = especialistas;
      this.allUsers = this.allUsers.concat(this.especialistas);
    });
    this.firestore.getAdmins().subscribe(administradores =>{
      this.administradores = administradores;
      this.allUsers = this.allUsers.concat(this.administradores);
    });
  }

  toggleHistoriaClinica(){
    this.historiaClinica = !this.historiaClinica;
    if(this.historiaClinica)
    {
      this.botonHistoriaClinica = `Ocultar`;
    }
    else
    {
      this.botonHistoriaClinica = `Ver`;
    }
  }

  cambiarTipoUser(tipo: string){
    this.historiaClinica = false;
    this.botonHistoriaClinica = 'Ver'
    this.registroAdministrador = false;

    this.tipoUser = tipo;

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
      this.botonDetalle = `en detalle`;
    }
    else
    {
      this.botonDetalle = `en formato reducido`;
    }
  }

  downloadExcel(){
    let workbook = new Workbook();

    let worksheet = workbook.addWorksheet("Usuarios");

    let header = ["Nombre", "Apellido", "DNI", "Edad", "Correo", "Perfil"];
    let headerRow = worksheet.addRow(header);

    for (let item of this.allUsers) {
      let auxRow = [item.nombre ,  item.apellido , item.dni , item.edad , item.email , item.perfil ];

      worksheet.addRow(auxRow);
    }
    
    let fileName = "UsuariosClinicaOnline";

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, fileName + '.xlsx');
    });
  }

  seleccionarPaciente(item: any){
    this.pacienteSeleccionado = item;
  }
}
