import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private token$:  BehaviorSubject<string> = new BehaviorSubject<string>("");
  private baseUrl = environment.endpoint;
  constructor(private router: Router,
              private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post<any>( this.baseUrl + 'api/login', {email: 'eve.holt@reqres.in' , password: 'cityslicka'})
      .pipe(map(resp => {
        this.token$.next(resp.token);
        localStorage.setItem('token',resp.token)
        return resp;
      }));
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
  }

  getToken(){
    return this.token$
  }

}
