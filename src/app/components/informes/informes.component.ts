import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

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
    let cantidad = 0;
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
    let cantidad = 0;
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
    let cantidad = 0;
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
  }

  mostrarLogs(){
    this.log = true;
    this.cantidadEspecialidadTurno = false;
    this.cantidadTurnosDia = false;
  }

  mostrarCantidadEspecialidad(){
    this.log = false;
    this.cantidadEspecialidadTurno = true;
    this.cantidadTurnosDia = false;
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

    this.chart = {
      primero:{
        pieChartLabels: dias,
        pieChartData: cantidadDia,
        pieChartType: 'pie',
      },
      segundo:{
        pieChartLabels: especialidades,
        pieChartData: cantidadEspecialidad,
        pieChartType: 'pie',
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
