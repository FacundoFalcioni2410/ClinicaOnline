import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPacienteGuard } from 'src/app/guards/admin-paciente.guard';
import { PacienteGuard } from 'src/app/guards/paciente.guard';
import { MisTurnosEspecialistaComponent } from './mis-turnos-especialista/mis-turnos-especialista.component';
import { MisTurnosPacienteComponent } from './mis-turnos-paciente/mis-turnos-paciente.component';
import { SolicitarTurnoComponent } from './solicitar-turno/solicitar-turno.component';
import { TurnosComponent } from './turnos.component';

const routes: Routes = [
  {
    path: 'mis-turnos/especialista',
    component: MisTurnosEspecialistaComponent,
  },
  {
    path: 'mis-turnos/paciente',
    component: MisTurnosPacienteComponent,
  },
  {
    path: 'solicitar-turno',
    component: SolicitarTurnoComponent
  },
  {
    path: '',
    component: TurnosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurnosRoutingModule { }
