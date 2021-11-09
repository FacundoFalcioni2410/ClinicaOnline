import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appFoto]'
})
export class FotoDirective {

  constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter(){
    this.agregarBorde();
  } 

  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.border = '';
  } 

  agregarBorde(){
    this.el.nativeElement.style.border = '3px solid #007BFE';
  }

}
