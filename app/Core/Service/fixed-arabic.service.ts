import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { RestAddresses } from "../Content/RestAddresses";
import { FoodList } from 'src/app/DTO/food-list';
import { ObserverService } from './observer.service';

@Injectable({
    providedIn: "root"
})
export class FixArabicService {
    foods: any[] = [];
    common_foods: any[] = [];
    foods_filterd: any[] = [];
    common_foods_filterd: any[] = [];

    list = new FoodList([], []);

    get token(): string {
        return localStorage.getItem("guest_token");
    }
    constructor (private httpClient: HttpClient, private observe: ObserverService) { }

    getData(data) {

        this.foods = data["foods"];
        this.common_foods = data["common_foods"];

        return this.foods && this.common_foods;
    }

    fixArabic(input: string) {
        let output = "";

        for (let i = 0; i < input.length; i++) {
            let letter = input.charAt(i);
            if (!this.isArabic(letter)) output += letter;
        }

        return output;
    }

    isArabic(letter) {
        if (typeof (letter) == "undefined" || letter == null) return false;

        let code = letter.charCodeAt(0);

        return code == 1600 || code == 1648 || (code >= 1612 && code <= 1631);
    }

    filteredfoodsList(text: string) {


        let searchOutput = this.fixArabic(text);


        if (searchOutput) {

            let x = this.foods.filter((food) => {
                return this.fixArabic(food.title).includes(searchOutput);
            });

            let y = this.common_foods.filter(food => {
                return this.fixArabic(food.title).includes(searchOutput);
            });

            this.foods_filterd = x;

            this.common_foods_filterd = y;
            this.list = {
                'foods': this.foods_filterd,
                'common_foods': this.common_foods_filterd
            };
            this.observe.setFoodList(this.list);

            return this.list

        } else {

            this.foods_filterd = this.foods.slice();
            this.common_foods_filterd = this.common_foods.slice();

            return this.list = {
                foods: this.foods_filterd,
                common_foods: this.common_foods_filterd
            };

        }
    }


    searchFood(keyword: string): Observable<FoodList> {
        const guest_token = this.token;
        return this.httpClient.post<FoodList>(RestAddresses.SEARCH_EQUALFOOD, {
            keyword,
            guest_token
        });
    }
}
