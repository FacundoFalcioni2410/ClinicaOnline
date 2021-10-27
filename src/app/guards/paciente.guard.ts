import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class PacienteGuard implements CanActivate {
  usuario: any;
  
  constructor(private router: Router){
    this.usuario = JSON.parse(localStorage.getItem('usuario') as string);
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.usuario?.perfil === 'paciente')
      {
        return true;
      }
      
      this.router.navigate(['/sin-permisos']);
      return false;
  }
}
