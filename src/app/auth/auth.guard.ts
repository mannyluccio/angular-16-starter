import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from "./auth.service";

@Injectable()
export class AuthenticationGuard {
  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate() {
    let token = this.authService.getToken().getValue() || localStorage.getItem('token')

    if (!token){
      return true;
    } else {
      return this.router.createUrlTree(['']);
    }
  }
}
