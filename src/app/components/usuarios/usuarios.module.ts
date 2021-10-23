import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { TablaEspecialistaComponent } from './tabla-especialista/tabla-especialista.component';
import { TablaAdminComponent } from './tabla-admin/tabla-admin.component';
import { TablaPacienteComponent } from './tabla-paciente/tabla-paciente.component';
import { UsuariosComponent } from './usuarios.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS, ScrollHooks } from 'ng-lazyload-image';


@NgModule({
  declarations: [
    TablaEspecialistaComponent,
    TablaAdminComponent,
    TablaPacienteComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule,
    LazyLoadImageModule,
  ],
  exports: [
    TablaPacienteComponent
  ]
})
export class UsuariosModule { }
