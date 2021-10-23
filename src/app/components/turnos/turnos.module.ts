import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurnosRoutingModule } from './turnos-routing.module';
import { MisTurnosComponent } from './mis-turnos/mis-turnos.component';
import { SolicitarTurnoComponent } from './solicitar-turno/solicitar-turno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { DatePipe } from '@angular/common';
import { TurnosComponent } from './turnos.component';


@NgModule({
  declarations: [
    MisTurnosComponent,
    SolicitarTurnoComponent,
    TurnosComponent
  ],
  imports: [
    CommonModule,
    TurnosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UsuariosModule
  ],
  providers: [DatePipe]
})
export class TurnosModule { }
