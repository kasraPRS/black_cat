import { ObserverService } from "./../../Core/Service/observer.service";
import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";
import { Subscription, fromEvent, from, of } from "rxjs";
import {
    debounceTime,
    map,
    distinctUntilChanged,
    tap,
    switchMap,
} from "rxjs/operators";
import { FixArabicService } from "src/app/Core/Service/fixed-arabic.service";
import { RoutingService } from "src/app/Routing/routing.service";
import { MapService } from 'src/app/Home/map/map.service';
// import { VotingListComponent } from '../../Share/voting-list/voting-list.component';
import { FoodList } from '../../DTO/food-list';


@Component({
    selector: "app-input-fields",
    templateUrl: "./input-fields.component.html",
    styleUrls: ["./input-fields.component.scss"]
})


export class InputFieldsComponent implements OnInit {
    @Input() placeHolder: string;

    foods: any;
    common_food: any;

    foodListDto = new FoodList([], []);
    @ViewChild("searchFiel") searchFiel: ElementRef;
    // @ViewChildren(VotingListComponent) child;


    keyUpSubscription: Subscription;
    food: any[] = [];
    constructor(
        private service: FixArabicService,
        private routerService: RoutingService,
        private observer: ObserverService,
        private mapService: MapService
    ) { }
    ngOnInit(): void {
    }

    search(value: string) {
        distinctUntilChanged(),

            this.service.searchFood(value).subscribe(
                r => {

                    this.foodListDto = r['data'];


                }
            )
    }

    ngAfterViewInit() {
        this.keyUpSubscription = fromEvent(this.searchFiel.nativeElement, "keyup")
            .pipe(
                debounceTime(1000),
                map((event: Event) => (<HTMLInputElement>event.target).value),
                tap(() => this.routerService.setNavigat(true))
            ).subscribe(
                r => {

                    this.foodListDto = this.service.filteredfoodsList(r);
                    this.observer.setFoodList(this.foodListDto);
                    this.routerService.setNavigat(false);

                }
            )
    }
}
