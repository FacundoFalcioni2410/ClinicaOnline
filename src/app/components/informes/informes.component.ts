import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.scss']
})
export class InformesComponent implements OnInit {

  turnos: any;
  especialidades: any;
  turnosEspecialidad: any = [];
  log: boolean = true;
  cantidadEspecialidadTurno: boolean = false;
  logs: any;

  constructor(private firestore: FirestoreService) {
    this.firestore.getLogs().subscribe(res =>{
      this.logs = res;
      this.firestore.turnosObs.subscribe(res =>{
        this.turnos = res;
        this.firestore.especialidadesObs.subscribe(res =>{
          this.especialidades = res;
  
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
        });
        
        console.log(this.turnosEspecialidad);
        
      });
    });
  }

  ngOnInit(): void {
  }

}
