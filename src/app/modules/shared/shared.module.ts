import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { RegistroComponent } from 'src/app/components/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SpinnerComponent,
    RegistroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SpinnerComponent,
    RegistroComponent,
  ]
})
export class SharedModule { }
