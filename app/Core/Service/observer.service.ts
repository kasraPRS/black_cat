import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FoodList } from '../../DTO/food-list';
@Injectable({
    providedIn: 'root'
})
export class ObserverService {
    stateFoods = new BehaviorSubject<any>([]);
    stateId = new BehaviorSubject<number>(0);
    voteOnce = new BehaviorSubject<number>(0);
    provinces = new BehaviorSubject<number>(0);
    cityName = new BehaviorSubject<string>('');
    provincesThatVoted = new BehaviorSubject<any>({});


    history = new BehaviorSubject<any>([]);

    clearInput = new BehaviorSubject<boolean>(false);


    selectedFood = new BehaviorSubject<any[]>([]);



    // 
    foodList = new BehaviorSubject<any[]>([]);
    constructor() { }

    setFoodList(list: any) {
        this.foodList.next(list);
    }
    setFoods(foods: any[]) {
        this.stateFoods.next(foods);
    }
    setStateId(id: number) {
        this.stateId.next(id);
    }
    setVoteOnce(vote: number) {
        this.voteOnce.next(vote);
    }
    setProvinces(lenght: number) {
        this.provinces.next(lenght);
    }
    setCityName(name: string) {

        this.cityName.next(name);
    }
    setProvincesThatVoted(provinces: any) {
        this.provincesThatVoted.next(provinces);
    }
    setHistory(data: any) {
        this.history.next(data);
    }
    setClearInput(clear: boolean) {
        this.clearInput.next(clear);
    }
    setSelectedFood(selectedfood: any[]) {
        this.selectedFood.next(selectedfood);
    }
}
