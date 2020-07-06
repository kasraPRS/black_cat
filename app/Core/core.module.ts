import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpRequestInterceptor } from './HttpInterseptors/http-request.interceptors';
import { HttpResponseInterceptors } from './HttpInterseptors/http-response.interceptor';
import { MaterialModule } from '../material/material.module';

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpRequestInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpResponseInterceptors,
            multi: true
        }
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule
    ],
    declarations: []
})
export class CoreModule { }
