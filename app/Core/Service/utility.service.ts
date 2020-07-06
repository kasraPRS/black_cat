import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  foods: any[];
  commonFoods: any[]
  constructor() { }

  votedCounter(list: any) {

    this.foods = list['foods'];
    this.commonFoods = list['common_foods'];

    return { 'foods': this.foods, 'commonFoods': this.commonFoods }
  }
  voteCounter() {
    let count = 0;

    this.foods.forEach(el => {
      if (el.voted) count++
    })

    this.commonFoods.forEach(el => {
      if (el.voted && el.votable) count++
    })

    return count
  }
    
    listCounter(list:any[]) {
        list = [];
        this.foods.map(el => {
            if (el.voted) {
                list.push(el.id)
            }
        })

        this.commonFoods.map(el => {
            if (el.voted && el.votable) {
                list.push((el.id))
            }
        })
        return list;
    }

}
