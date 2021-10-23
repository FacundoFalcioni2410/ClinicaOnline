import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPacienteGuard } from 'src/app/guards/admin-paciente.guard';
import { PacienteGuard } from 'src/app/guards/paciente.guard';
import { MisTurnosComponent } from './mis-turnos/mis-turnos.component';
import { SolicitarTurnoComponent } from './solicitar-turno/solicitar-turno.component';
import { TurnosComponent } from './turnos.component';

const routes: Routes = [
  {
    path: 'mis-turnos',
    component: MisTurnosComponent,
    canActivate: [AdminPacienteGuard]
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
