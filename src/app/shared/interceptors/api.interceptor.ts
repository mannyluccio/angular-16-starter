import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  private api = environment.endpoint;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req,environment)
    const apiReq = req.clone({ url: this.api + req.url });
    return next.handle(apiReq);
  }
}
