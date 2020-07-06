import { Component, OnInit, ViewChild } from '@angular/core';
import { ScoreService } from '../score.service';
import { ScoreList } from 'src/app/DTO/score-list';
import { Router } from '@angular/router';
import { RoutingService } from 'src/app/Routing/routing.service';

@Component({
    selector: 'app-score',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
    list: ScoreList[];
    more_button: boolean;
    hideBtn: boolean = false;
    province_button: boolean = false;
    iran_button: boolean = false;
    constructor (private service: ScoreService, private router: Router, private routerService: RoutingService) { }

    province($event) {
        this.province_button = true;
        this.iran_button = false;
        this.routerService.setNavigat(true);

        this.service.toProvinces().subscribe(
            r => {
                if (r) {
                    this.routerService.setNavigat(false);
                    this.list = r['data'];
                    this.more_button = false;
                }

            }
        );

        this.setActiveProperties($event);

    }

    iran($event) {

        this.iran_button = true;
        this.province_button = false;
        this.routerService.setNavigat(true);


        this.service.citiesScore(0).subscribe(
            r => {
                if (r) {
                    this.routerService.setNavigat(false);
                    this.more_button = true;
                    this.list = r['data']['foods'];
                }
            }
        );
        this.setActiveProperties($event);

    }

    more($event) {
        this.routerService.setNavigat(true);

        this.service.citiesScore($event).subscribe(
            r => {
                if (r) {
                    this.routerService.setNavigat(false);
                    if (r['data']['pagination']['page'] == r['data']['pagination']['total_pages']) {
                        this.more_button = true;
                    } else {
                        for (let i = 0; i < r['data']['foods'].length; i++) {
                            this.list.push(r['data']['foods'][i])
                        }
                    }
                }

            }
        );

    }

    back() {
        this.router.navigateByUrl('');
    }

    setActiveProperties($event) {
        let clickedElement = $event.target || $event.srcElement;

        if (clickedElement.nodeName === "BUTTON") {

            let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
            if (isCertainButtonAlreadyActive) {
                isCertainButtonAlreadyActive.classList.remove("active");
            }
            clickedElement.className += " active";
        }
    }
    ngOnInit(): void {
        this.iran('');

    }

}
