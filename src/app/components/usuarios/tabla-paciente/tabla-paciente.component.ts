import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-paciente',
  templateUrl: './tabla-paciente.component.html',
  styleUrls: ['./tabla-paciente.component.scss']
})
export class TablaPacienteComponent implements OnInit {

  @Input() pacientes: any;

  constructor() { }

  ngOnInit(): void {
  }

}
