//@Injectable() decorator marks it as a service that can be injected
import { Injectable } from '@angular/core';
//particular component view for a given URL.
import { Router} from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//Reactive-Extensions/RxJS breaking changes that reduce the API surface.
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
//agr login time response provide toekn that go main page
    if (window.localStorage.getItem('token')) {
      this.router.navigate(['/pages']);
      return false;
    }
    return true;
  }
}
