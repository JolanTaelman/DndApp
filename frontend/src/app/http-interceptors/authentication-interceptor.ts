import { Injectable } from "@angular/core";
import { AuthenticationService } from "../user/authentication.service";
import { HttpInterceptor, HttpSentEvent, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor{

    constructor(private authservice: AuthenticationService){
        
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authservice.token.length) {
            const clonedRequest = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${this.authservice.token}`)
            });
            return next.handle(clonedRequest);
        }
        return next.handle(req);
    }



}
