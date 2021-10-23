import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tabla-paciente',
  templateUrl: './tabla-paciente.component.html',
  styleUrls: ['./tabla-paciente.component.scss']
})
export class TablaPacienteComponent implements OnInit {

  @Input() pacientes: any;
  @Output() enviar: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  enviarPaciente(paciente: any){
    this.enviar.emit(paciente);
  }
}
