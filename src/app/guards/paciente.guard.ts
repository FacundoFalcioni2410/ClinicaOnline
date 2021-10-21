import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class PacienteGuard implements CanActivate {
  constructor(private firestore: FirestoreService, private router: Router){
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.firestore.usuarioActual?.perfil === 'paciente')
      {
        return true;
      }
      
      this.router.navigate(['/sin-permisos']);
      return false;
  }
  
}
