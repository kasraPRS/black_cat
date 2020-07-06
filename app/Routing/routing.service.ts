import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, RouterEvent } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RoutingService {
    isNavigate = new BehaviorSubject<boolean>(false);
    isNavigate$ = this.isNavigate.asObservable();
    private lastSuccessfulRouteUrl = '';
    previousUrl = '';
    constructor (private router: Router) {
        this.lastSuccessfulRouteUrl = this.router.url;
        router.events.subscribe(
            (event: RouterEvent) => {
                this.navigationInterceptor(event);
            }
        );
    }

    setNavigat(set: boolean) {
        this.isNavigate.next(set);
    }

    navigationInterceptor(event: RouterEvent) {
        if (event instanceof NavigationStart) {
            this.isNavigate.next(true);
        }
        if (event instanceof NavigationEnd) {
            this.previousUrl = this.lastSuccessfulRouteUrl;
            this.lastSuccessfulRouteUrl = event.url;
            this.isNavigate.next(false);
        }
    }
}
