import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.scss']
})
export class InformesComponent implements OnInit {
  @ViewChild('informe', {static: true}) el!: ElementRef<HTMLImageElement>;

  turnos: any;
  especialidades: any;
  turnosEspecialidad: any = [];
  logs: any;
  turnosPorDia: any = [];
  especialistas: any = [];
  
  turnosSolicitadoMedico: any = [];
  turnosFinalizadoMedico: any = [];

  chart: any;
  chartTerminado: boolean = false;

  turnosSolicitados: boolean = false;
  turnosFinalizados: boolean = false;  
  log: boolean = true;
  cantidadEspecialidadTurno: boolean = false;
  cantidadTurnosDia: boolean = false;

  constructor(private firestore: FirestoreService) {
    this.firestore.getLogs().subscribe(res =>{
      this.logs = res;
      this.firestore.turnosObs.subscribe(res =>{
        this.turnos = res;
        this.firestore.especialidadesObs.subscribe(res =>{
          this.especialidades = res;
          this.firestore.getEspecialistas().subscribe(res =>{
            this.especialistas = res;
            this.cargarTurnosDia();
            this.cargarTurnosEspecialidad();
            this.cargarTurnosSolicitadoMedico();
            this.cargarTurnosFinalizadoMedico();
          });
        });
      });
    });
  }

  ngOnInit(): void {
  }

  cargarTurnosEspecialidad(){
    this.turnosEspecialidad = [];
    let cantidad = 0;
    for(let i = 0; i < this.especialidades.length; i++)
    {
      for(let j = 0; j < this.turnos.length; j++)
      {
        if(this.turnos[j].especialidad === this.especialidades[i].especialidad)
        {
          cantidad++;
        }

        if(j === (this.turnos.length - 1))
        {
          this.turnosEspecialidad.push({especialidad: this.especialidades[i].especialidad, cantidad: cantidad});
          cantidad = 0;
        }
      }
    }
  }

  cargarTurnosDia(){
    this.turnosPorDia = [];
    let flag;

    for(let turno of this.turnos)
    {
      flag = false;
      let objeto = {
        dia: turno.fecha,
        cantidad: 1,
      }

      for(let item of this.turnosPorDia)
      {
        if(item.dia === turno.fecha)
        {
          flag = true;
          item.cantidad++;
        }
      }

      if(!flag)
      {
        this.turnosPorDia.push(objeto);
      }
    }
  }

  cargarTurnosSolicitadoMedico(){
    this.turnosSolicitadoMedico = [];
    let flag;

    for(let turno of this.turnos)
    {
      for(let especialista of this.especialistas)
      {
        if(turno.especialista === especialista.dni)
        {
          let objeto = {
            especialista: `${especialista.nombre} ${especialista.apellido}`,
            dni: turno.especialista,
            cantidad: 1 
          };

          for(let item of this.turnosSolicitadoMedico)
          {
            if(item.dni === turno.especialista)
            {
              flag = true;
              item.cantidad++;
            }
          }

          if(!flag)
          {
            this.turnosSolicitadoMedico.push(objeto);
          }

          flag = false;
        }
      }
    }
  }

  cargarTurnosFinalizadoMedico(){
    this.turnosFinalizadoMedico = [];
    let flag;

    for(let turno of this.turnos)
    {
      if(turno.estado === 'realizado')
      {
        for(let especialista of this.especialistas)
        {
          if(turno.especialista === especialista.dni)
          {
            let objeto = {
              especialista: `${especialista.nombre} ${especialista.apellido}`,
              dni: turno.especialista,
              cantidad: 1 
            };

            for(let item of this.turnosFinalizadoMedico)
            {
              if(item.dni === turno.especialista)
              {
                flag = true;
                item.cantidad++;
              }
            }

            if(!flag)
            {
              this.turnosFinalizadoMedico.push(objeto);
            }

            flag = false;
          }
        }
      }
    }
  }

  mostrarTurnosDia(){
    this.log = false;
    this.cantidadEspecialidadTurno = false;
    this.cantidadTurnosDia = true;
    this.turnosFinalizados = false;
    this.turnosSolicitados = false;
  }

  mostrarLogs(){
    this.log = true;
    this.cantidadEspecialidadTurno = false;
    this.cantidadTurnosDia = false;
    this.turnosFinalizados = false;
    this.turnosSolicitados = false;
  }

  mostrarCantidadEspecialidad(){
    this.log = false;
    this.cantidadEspecialidadTurno = true;
    this.cantidadTurnosDia = false;
    this.turnosFinalizados = false;
    this.turnosSolicitados = false;
  }

  mostrarTurnosFinalizados(){
    this.log = false;
    this.cantidadEspecialidadTurno = false;
    this.cantidadTurnosDia = false;
    this.turnosFinalizados = true;
    this.turnosSolicitados = false;
  }
  
  mostrarTurnosSolicitadosMedico(){
    this.log = false;
    this.cantidadEspecialidadTurno = false;
    this.cantidadTurnosDia = false;
    this.turnosFinalizados = false;
    this.turnosSolicitados = true;
  }

  generateChart(){

    let dias = this.turnosPorDia.map((item: any) =>{
      return item.dia;
    });
    let cantidadDia = this.turnosPorDia.map((item: any) =>{
      return item.cantidad;
    });

    let especialidades = this.turnosEspecialidad.map((item: any) =>{
      return item.especialidad;
    });
    let cantidadEspecialidad = this.turnosEspecialidad.map((item: any) =>{
      return item.cantidad;
    });

    let especialistas = this.turnosSolicitadoMedico.map((item: any) =>{
      return item.especialista;
    });
    let cantidadEspecialista = this.turnosSolicitadoMedico.map((item: any) =>{
      return item.cantidad;
    });

    let especialistasFinalizado = this.turnosFinalizadoMedico.map((item: any) =>{
      return item.especialista;
    });
    let cantidadEspecialistaFinalizado = this.turnosFinalizadoMedico.map((item: any) =>{
      return item.cantidad;
    });

    let especialidad: any = [] = especialidades;


    this.chart = {
      primero:{
        pieChartLabels: dias,
        pieChartData: cantidadDia,
        pieChartType: 'pie',
      },
      segundo:{
        label: false,
        barChartLabels: especialidades,
        barChartData: cantidadEspecialidad,
        barChartType: 'bar',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
      },
      tercero:{
        pieChartLabels: especialistas,
        pieChartData: cantidadEspecialista,
        pieChartType: 'pie',
      },
      cuarto:{
        pieChartLabels: especialistasFinalizado,
        pieChartData: cantidadEspecialistaFinalizado,
        pieChartType: 'pie',
      },
    }
    this.chartTerminado = true;
  }

  downloadExcelLogs(){
    let workbook = new Workbook();

    let worksheet = workbook.addWorksheet("Logs de usuarios");

    let header = ["Usuario", "Fecha", "Hora"];
    let headerRow = worksheet.addRow(header);

    for (let item of this.logs) {
      let auxRow = [item.usuario ,  item.fecha , item.hora];

      worksheet.addRow(auxRow);
    }
    
    let fileName = "LogsUsuarios-Clinica_Online";

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, fileName + '.xlsx');
    });
  }

  downloadExcelDia(){
    let workbook = new Workbook();

    let worksheet = workbook.addWorksheet("Turnos por dia");

    let header = ["Dia", "Cantidad de turnos"];
    let headerRow = worksheet.addRow(header);

    for (let item of this.turnosPorDia) {
      let auxRow = [item.dia ,  item.cantidad];

      worksheet.addRow(auxRow);
    }
    
    let fileName = "TurnosPorDia-Clinica_Online";

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, fileName + '.xlsx');
    });
  }

  downloadExcelEspecialidades(){
    let workbook = new Workbook();

    let worksheet = workbook.addWorksheet("Cantidad de especialidades de los turnos");

    let header = ["Especialidad", "Cantidad"];
    let headerRow = worksheet.addRow(header);

    for (let item of this.turnosEspecialidad) {
      let auxRow = [item.especialidad ,  item.cantidad];

      worksheet.addRow(auxRow);
    }
    
    let fileName = "CantidadEspecialidades-Clinica_Online";

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, fileName + '.xlsx');
    });
  }

  downloadExcelTurnosSolicitados(){
    let workbook = new Workbook();

    let worksheet = workbook.addWorksheet("Cantidad de turnos solicitados por especialista");

    let header = ["Especialista", "Cantidad"];
    let headerRow = worksheet.addRow(header);

    for (let item of this.turnosSolicitadoMedico) {
      let auxRow = [item.especialista ,  item.cantidad];

      worksheet.addRow(auxRow);
    }
    
    let fileName = "TurnosSolicitados-Clinica_Online";

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, fileName + '.xlsx');
    });
  }

  downloadExcelTurnosFinalizado(){
    let workbook = new Workbook();

    let worksheet = workbook.addWorksheet("Cantidad de turnos finalizdos por especialista");

    let header = ["Especialista", "Cantidad"];
    let headerRow = worksheet.addRow(header);

    for (let item of this.turnosFinalizadoMedico) {
      let auxRow = [item.especialista, item.cantidad];

      worksheet.addRow(auxRow);
    }
    
    let fileName = "TurnosFinalizados-Clinica_Online";

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, fileName + '.xlsx');
    });
  }

  downloadPdf(){
    html2canvas(this.el.nativeElement).then((canvas)=>{
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF({
        orientation: 'portrait',
      });
      const imageProps = pdf.getImageProperties(imgData);
      const pdfw = pdf.internal.pageSize.getWidth();
      const pdfh = (imageProps.height* pdfw)/ imageProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfw, pdfh);
      pdf.save('informes.pdf');
    })
  }
}
