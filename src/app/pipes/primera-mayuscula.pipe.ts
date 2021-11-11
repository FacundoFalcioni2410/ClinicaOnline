import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeraMayuscula'
})
export class PrimeraMayusculaPipe implements PipeTransform {

  //Se utiliza en mi perfil, turnos, mis-turnos, mis-turnos-especialista

  transform(value: string, ...args: unknown[]): unknown {
    return value ? value[0].toUpperCase() + value.slice(1) : null;
  }

}
