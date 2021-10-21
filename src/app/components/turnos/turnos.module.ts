import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurnosRoutingModule } from './turnos-routing.module';
import { MisTurnosComponent } from './mis-turnos/mis-turnos.component';
import { SolicitarTurnoComponent } from './solicitar-turno/solicitar-turno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MisTurnosComponent,
    SolicitarTurnoComponent
  ],
  imports: [
    CommonModule,
    TurnosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TurnosModule { }
