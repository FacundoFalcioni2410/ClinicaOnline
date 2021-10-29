import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { RegistroComponent } from 'src/app/components/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HistoriaClinicaComponent } from 'src/app/components/historia-clinica/historia-clinica.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    RegistroComponent,
    HistoriaClinicaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule
  ],
  exports: [
    SpinnerComponent,
    RegistroComponent,
    HistoriaClinicaComponent
  ]
})
export class SharedModule { }
