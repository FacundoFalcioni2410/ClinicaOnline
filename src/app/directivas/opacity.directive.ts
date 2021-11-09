import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOpacity]'
})
export class OpacityDirective {

  constructor(private el: ElementRef) { }


  @HostListener('mouseenter') onMouseEnter(){
    this.agregarBorde();
  } 

  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.opacity = '1';
  } 

  agregarBorde(){
    this.el.nativeElement.style.opacity = '.7';
  }
}
