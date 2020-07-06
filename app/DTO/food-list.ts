export class FoodList {
    foods = [];
    common_foods = [];
    
    constructor(
        foods: any[],
        common_foods: any[],

    ) {

        this.foods = foods;
        this.common_foods = common_foods;

    }
}