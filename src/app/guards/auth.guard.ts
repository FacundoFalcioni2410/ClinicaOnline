import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  usuario: any;
  
  constructor(private router: Router){
    this.usuario = JSON.parse(localStorage.getItem('usuario') as string);
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.usuario)
      {
        return true;
      }
      
      this.router.navigate(['/sin-permisos']);
      return false;
  }
  
}
