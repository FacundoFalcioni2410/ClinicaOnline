import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEstados]'
})
export class EstadosDirective implements OnInit {

  @Input() appEstados = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    
  }

  ngOnInit(){
    console.log(this.appEstados);
    if(this.appEstados === 'aceptado')
    {
      this.renderer.addClass(this.el.nativeElement,'bg-warning');
      this.renderer.addClass(this.el.nativeElement,'text-dark');
    }
    else if(this.appEstados === "cancelado")
    {
      this.renderer.addClass(this.el.nativeElement,'bg-danger');
      this.renderer.addClass(this.el.nativeElement,'text-white');
    }
    else if(this.appEstados === "rechazado")
    {
      this.renderer.addClass(this.el.nativeElement,'bg-danger');
      this.renderer.addClass(this.el.nativeElement,'text-dark');
    }
    else if(this.appEstados === 'pendiente')
    {
      this.renderer.addClass(this.el.nativeElement,'bg-info');
      this.renderer.addClass(this.el.nativeElement,'text-dark');
    }
    else if(this.appEstados === 'realizado')
    {
      this.renderer.addClass(this.el.nativeElement,'bg-success');
      this.renderer.addClass(this.el.nativeElement,'text-dark');
    }
  }

}
