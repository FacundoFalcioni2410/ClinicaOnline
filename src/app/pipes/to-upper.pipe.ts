import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUpper'
})
export class ToUpperPipe implements PipeTransform {

  //Se utiliza en estado de turnos, mis-turnos-paciente, mis-turnos-especialista

  transform(value: string, ...args: unknown[]): string {
    return value.toUpperCase();
  }

}
