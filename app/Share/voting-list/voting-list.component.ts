import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { UtilityService } from "src/app/Core/Service/utility.service";
import { ObserverService } from "src/app/Core/Service/observer.service";
import { FoodList } from 'src/app/DTO/food-list';
import { VotingService } from 'src/app/voting/voting.service';
@Component({
    selector: "app-voting-list",
    templateUrl: "./voting-list.component.html",
    styleUrls: ["./voting-list.component.scss"]
})
export class VotingListComponent implements OnInit {

    @ViewChild("searchFiel") searchFiel: ElementRef;


    foodList = new FoodList([], []);
    selectedFood: any[] = [];

    innerCount: number;
    city_name: string;

    constructor (
        private utility: UtilityService,
        private state: ObserverService,
        private votinrService: VotingService
    ) { }

    select(food: {}) {

        this.selectedFood.push(food['id']);

        const maxAllowed = 5;

        food["voted"] = !food["voted"];

        const count = this.utility.voteCounter();

        if (count > maxAllowed) {
            food["voted"] = false;
            alert("thats enough Animall");
        } else {
            this.innerCount = count;
        }
    }

    submit() {
        let cityId = this.state.stateId.value
        let selectedFoods = this.utility.listCounter(this.selectedFood);

        this.votinrService.setVote(cityId, selectedFoods).subscribe(r => {
            console.log(r);

        })


    }

    ngOnInit() {

        this.state.foodList.subscribe(
            r => {
                
                this.foodList.foods = r['foods'];
                this.foodList.common_foods = r['common_foods'];

            }
        )

        this.city_name = this.state.cityName.value;

    }
}
