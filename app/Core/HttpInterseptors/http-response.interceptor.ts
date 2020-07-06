import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
// import { LoginSerivceService } from '../../login/login.service';
import { Router } from '@angular/router';
// import { DialogService } from '../service/dialog.service';
@Injectable({
    providedIn: 'root'
})
export class HttpResponseInterceptors implements HttpInterceptor {
    constructor (private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(1),
                map(event => {
                    if (event instanceof HttpResponse) {

                        event = event.clone({ body: event.body.result });
                    }
                    return event;
                })
                ,
                catchError((error: HttpErrorResponse) => {
                    if (error.status === 401) {
                        this.router.navigateByUrl('');
                        return of(null);
                    }
                    if (error.status != 200) {
                        console.log(error.error.errors);

                        // this.dialogService.openError(error.error.errors[0])

                    }
                    return of(null);
                }),
                catchError((response: HttpErrorResponse) => {

                    let errorMessage = '';
                    if (response.error instanceof ErrorEvent) {
                        errorMessage = `Error: ${response.error.message}`;
                    } else if (response.error && response.error.lenght > 0) {
                        errorMessage = response.error;
                    } else {
                        errorMessage = response.error.error.errorMessage;
                    }
                    return of(null);
                })
            );
    }
}
