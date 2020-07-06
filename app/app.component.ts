import { Component, OnInit } from '@angular/core';
import { RoutingService } from './Routing/routing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'iran food';
    isNavigation: boolean = false;
    constructor (private routerService: RoutingService) {
        this.routerService.isNavigate$.subscribe(
            value => {
                this.isNavigation = value;
            }
        )    
    }

    ngOnInit() {
        this.routerService.isNavigate$.subscribe(
            value => {
                this.isNavigation = value;
            }
        );
    }

}
