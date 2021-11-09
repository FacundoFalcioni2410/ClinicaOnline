import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { PdfMakeWrapper, Img, Table  } from 'pdfmake-wrapper';
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-historia-clinica',
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.scss']
})
export class HistoriaClinicaComponent implements OnInit {

  @Input() set pacienteInput(value: any){
    this.paciente = value;
    this.historiaClinica = [];
    this.cargarHistoriaClinica();
  }

  @Input() set pacientesInput(value: any){
    this.pacientes = value;
    this.historiaClinica = [];
    this.cargarHistoriaClinica();
  }

  pacientes: any;
  especialistas: any;
  paciente: any;
  historiaClinica: any;
  historiaClinicaMostrar: any;
  tabla: any;
  mensaje = '';

  constructor(private firestore: FirestoreService, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
  }

  cargarHistoriaClinica(){
    this.mensaje = '';
    this.firestore.getEspecialistas().subscribe(res =>{
      this.especialistas = res;

      if(this.paciente)
      {
        if(this.paciente?.historiaClinica)
        {
          for(let historia of this.paciente.historiaClinica)
          {
            for(let item of this.especialistas)
            {
              if(historia.especialista === item.dni)
              {
                historia.especialistaCompleto = item;
              }  
            }
            this.historiaClinica.push(historia);
          }
          this.historiaClinicaMostrar = this.historiaClinica;
        }
        else
        {
          this.mensaje = 'Este paciente todavia no tiene datos cargados';
        }
      }
      else
      {
        for(let paciente of this.pacientes)
        {
          for(let historia of paciente.historiaClinica)
          {
            if(historia.especialista === this.firestore.usuarioActual?.dni)
            {
              historia.especialistaCompleto = this.firestore?.usuarioActual;
              historia.pacienteCompleto = paciente;
              this.historiaClinica.push(historia);
            }
          }
        }
          this.historiaClinicaMostrar = this.historiaClinica;
      }
    });
  }

  seleccionarEspecialista(item: any){
    this.historiaClinicaMostrar = [];
    for(let historia of this.historiaClinica)
    {
      if(item.dni === historia.especialista)
      {
        this.historiaClinicaMostrar.push(historia);
      }
    }
  }

  eliminarObjetosDuplicados(arr: any, prop: any) {
    var nuevoArray: any = [];
    var lookup: any = {};

    for (let i in arr) {
      lookup[arr[i][prop]] = arr[i];
    }

    for (let i in lookup) {
      nuevoArray.push(lookup[i]);
    }

    return nuevoArray;
  }

  async generatePDF(){
    PdfMakeWrapper.setFonts(pdfFonts);
    const pdf = new PdfMakeWrapper();
    pdf.add((await new Img('./../../../assets/clinica.png').width(100).alignment('center').build()))
    let fecha = new Date();
    pdf.pageSize('A4');
    pdf.pageMargins(40);
    pdf.footer(this.datePipe.transform(fecha, 'dd/MM/yyyy'));
    pdf.add({text: 'Historia clinica', alignment: 'center',fontSize: 22, bold: true,  margin: [50, 20]})
    pdf.add(this.createTable());
    pdf.create().download();
  }

  createTable(){
    this.formatDataToTable();
    [{}]
    return new Table(this.tabla).alignment('center').end;
  }

  formatDataToTable(){

    this.tabla = this.historiaClinicaMostrar.map((historiaClinica:any)=>{
      let row = [];
      row.push(
        historiaClinica.dia + ' ' + historiaClinica.hora + '\n' +
        historiaClinica.especialistaCompleto.nombre + '\n' + 
        historiaClinica.especialistaCompleto.apellido + '\n' + 
        'Comentario: ' + historiaClinica.comentario + '\n'
      );
      row.push(
        'Peso: ' +  historiaClinica.peso + '\n' +
        'Altura: ' + historiaClinica.altura + '\n' + 
        'Presion: ' + historiaClinica.presion + '\n' + 
        'Temperatura: ' +  historiaClinica.temperatura + '\n' + 
        historiaClinica.dinamico1.clave + ':' + historiaClinica.dinamico1.valor + '\n' +
        historiaClinica.dinamico2.clave + ':' + historiaClinica.dinamico2.valor + '\n' +
        historiaClinica.dinamico3.clave + ':' + historiaClinica.dinamico3.valor + '\n'
        );
        return row;
      });
  }

}
