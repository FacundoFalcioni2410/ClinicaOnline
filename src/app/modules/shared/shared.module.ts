import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { RegistroComponent } from 'src/app/components/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HistoriaClinicaComponent } from 'src/app/components/historia-clinica/historia-clinica.component';
import { PrimeraMayusculaPipe } from 'src/app/pipes/primera-mayuscula.pipe';
import { FotoDirective } from 'src/app/directivas/foto.directive';



@NgModule({
  declarations: [
    SpinnerComponent,
    RegistroComponent,
    HistoriaClinicaComponent,
    PrimeraMayusculaPipe,
    FotoDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
  ],
  exports: [
    SpinnerComponent,
    RegistroComponent,
    HistoriaClinicaComponent,
    PrimeraMayusculaPipe,
    FotoDirective,
  ],
  providers: [DatePipe]
})
export class SharedModule { }
