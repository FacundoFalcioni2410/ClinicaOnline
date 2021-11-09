import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeraMayuscula'
})
export class PrimeraMayusculaPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value ? value[0].toUpperCase() + value.slice(1) : null;
  }

}
