import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GaurdService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(localStorage.getItem('currentUser')){
      //logged in

      return true;
    }
/* returns a url whic redirects user to log in if they arent logged in*/
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
