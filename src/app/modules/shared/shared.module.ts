import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { RegistroComponent } from 'src/app/components/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HistoriaClinicaComponent } from 'src/app/components/historia-clinica/historia-clinica.component';
import { PrimeraMayusculaPipe } from 'src/app/pipes/primera-mayuscula.pipe';
import { FotoDirective } from 'src/app/directivas/foto.directive';
import { DniFormatPipe } from 'src/app/pipes/dni-format.pipe';
import { OpacityDirective } from 'src/app/directivas/opacity.directive';



@NgModule({
  declarations: [
    SpinnerComponent,
    RegistroComponent,
    HistoriaClinicaComponent,
    PrimeraMayusculaPipe,
    FotoDirective,
    DniFormatPipe,
    OpacityDirective
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
    DniFormatPipe,
    OpacityDirective
  ],
  providers: [DatePipe]
})
export class SharedModule { }
