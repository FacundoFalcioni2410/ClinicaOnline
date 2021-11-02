import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-historia-clinica',
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.scss']
})
export class HistoriaClinicaComponent implements OnInit {

  @Input() pacientes: any;
  @Input() paciente: any;
  constructor() {
  }

  ngOnInit(): void {
  }

}
