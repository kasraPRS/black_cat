import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';
import { ObserverService } from 'src/app/Core/Service/observer.service';
import { RoutingService } from 'src/app/Routing/routing.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    foods: any[] = [];
    provinces: any[] = [];
    voted: any[] = [];
    result: any;

    voters: number;
    votes: number;
    constructor(
        private service: MapService,
        private observer: ObserverService,
        private routingService: RoutingService,
        private router: Router
    ) { }
    showResult() {
        this.router.navigateByUrl('scoreboard');
    }
    point(id: number, name: string) {

        if (this.provinces.length < 3) {

            this.observer.setCityName(name);
            this.observer.setStateId(id);
            this.router.navigateByUrl('voting');
            // this.getFoods(id);

        } else {
            if (this.provinces.filter(k => k.id === id).length > 0) {

                this.observer.setCityName(name);
                this.observer.setStateId(id);
                // this.getFoods(id);

            } else {
                // error
                return;
            }
        }

    }
    // getFoods(id: number) {
    //     this.routingService.setNavigat(true);
    //     this.service.getFoods(id).subscribe(
    //         r => {
    //             if (r) {
    //                 this.routingService.setNavigat(false);
    //                 this.observer.setFoods(r);
    //                 this.router.navigateByUrl('voting');
    //             } else {
    //                 this.routingService.setNavigat(true);
    //             }
    //         }
    //     );
    // }

    openInfoDialog() {
        return;
    }

    ngOnInit() {
        setTimeout(() => {
            if (localStorage.getItem('guest_token')) {
                this.service.checkVotedBefore().subscribe(
                    r => {
                        this.foods = r['data']['food'];
                        this.provinces = r['data']['provinces'];
                        this.votes = r['data']['stats']['votes'];


                        localStorage.setItem('voters', this.voters = r['data'].stats.voters);
                        localStorage.setItem('votes', this.votes = r['data'].stats.votes);

                        this.observer.setProvincesThatVoted(this.provinces);

                        this.observer.setProvinces(this.provinces.length);
                        this.foods = r['data'].foods;
                    }
                );
            }
        }, 500);
    }

}
