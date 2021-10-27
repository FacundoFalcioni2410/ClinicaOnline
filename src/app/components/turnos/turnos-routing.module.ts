import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPacienteGuard } from 'src/app/guards/admin-paciente.guard';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { EspecialistaGuard } from 'src/app/guards/especialista.guard';
import { PacienteGuard } from 'src/app/guards/paciente.guard';
import { MisTurnosEspecialistaComponent } from './mis-turnos-especialista/mis-turnos-especialista.component';
import { MisTurnosPacienteComponent } from './mis-turnos-paciente/mis-turnos-paciente.component';
import { SolicitarTurnoComponent } from './solicitar-turno/solicitar-turno.component';
import { TurnosComponent } from './turnos.component';

const routes: Routes = [
  {
    path: 'mis-turnos/especialista',
    component: MisTurnosEspecialistaComponent,
    canActivate: [EspecialistaGuard],
  },
  {
    path: 'mis-turnos/paciente',
    component: MisTurnosPacienteComponent,
    canActivate: [PacienteGuard],
  },
  {
    path: 'solicitar-turno',
    component: SolicitarTurnoComponent,
    canActivate: [AdminPacienteGuard],
  },
  {
    path: '',
    component: TurnosComponent,
    canActivate: [AdminGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurnosRoutingModule { }
