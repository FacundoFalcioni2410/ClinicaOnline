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

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: PageRegistroComponent,
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./components/usuarios/usuarios.module').then(m => m.UsuariosModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'turnos',
    loadChildren: () => import('./components/turnos/turnos.module').then(m => m.TurnosModule),
  },
  {
    path: 'sin-permisos',
    component: SinPermisosComponent,
  },
  {
    path: 'mi-perfil',
    component: MiPerfilComponent,
  },
  {
    path: 'pacientes',
    component: PacientesComponent,
    canActivate: [EspecialistaGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
