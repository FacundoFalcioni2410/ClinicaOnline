import { AdminGuard } from './guards/admin.guard';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PageRegistroComponent } from './components/page-registro/page-registro.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteGuard } from './guards/paciente.guard';
import { SinPermisosComponent } from './components/sin-permisos/sin-permisos.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { EspecialistaGuard } from './guards/especialista.guard';
import { InformesComponent } from './components/informes/informes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: '' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {animation: ''}
  },
  {
    path: 'registro',
    component: PageRegistroComponent,
    data: {animation: ''}
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./components/usuarios/usuarios.module').then(m => m.UsuariosModule),
    canActivate: [AdminGuard],
    data: {animation: ''}
  },
  {
    path: 'turnos',
    loadChildren: () => import('./components/turnos/turnos.module').then(m => m.TurnosModule),
    data: {animation: ''}
  },
  {
    path: 'sin-permisos',
    component: SinPermisosComponent,
  },
  {
    path: 'mi-perfil',
    component: MiPerfilComponent,
    data: {animation: ''}
  },
  {
    path: 'pacientes',
    component: PacientesComponent,
    canActivate: [EspecialistaGuard],
    data: {animation: ''}
  },
  {
    path: 'informes',
    component: InformesComponent,
    canActivate: [AdminGuard],
    data: {animation: ''}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
