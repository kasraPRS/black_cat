import { Component, OnInit } from '@angular/core';
import { ObserverService } from 'src/app/Core/Service/observer.service';
import { MapService } from 'src/app/Home/map/map.service';
import { FixArabicService } from 'src/app/Core/Service/fixed-arabic.service';
import { RoutingService } from 'src/app/Routing/routing.service';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/Core/Service/utility.service';
import { FoodList } from '../../DTO/food-list';
@Component({
    selector: 'app-voting',
    templateUrl: './voting.component.html',
    styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {
    foods: any[] = [];
    // tslint:disable-next-line:variable-name
    common_foods: any[] = [];
    foodList = new FoodList([], []);
    constructor(
        private observer: ObserverService,
        private service: MapService,
        private fixedArabic: FixArabicService,
        private routingService: RoutingService,
        private router: Router,
        private utility: UtilityService
    ) { }
    getFoods() {

        if (this.observer.stateId.value > 0) {
            this.service.getFoods(this.observer.stateId.value).subscribe(r => {
                if (r) {

                    this.fixedArabic.getData(r['data']);
                    this.foodList = r['data'];
                    this.observer.setFoodList(this.foodList);
                    this.utility.votedCounter(this.foodList);

                }

            });

        } else {
            setTimeout(() => {
                this.routingService.setNavigat(true);
                this.router.navigateByUrl('');
            }, 500);
        }

    }
    ngOnInit() {
        this.getFoods();
    }

}
