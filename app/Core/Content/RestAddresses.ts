import { Router, ActivatedRoute } from '@angular/router';

export class RestAddresses {
    // Api address goes here
    static baseUrl = 'https://lastsecond.ir/api/food/';
    // static baseUrl =  'http://food.ir/api/food/';
    // static baseUrl =  'http://food.local/api/food/';


    // 

    static readonly TESTKIR = 'http://localhost:3000/';
    static readonly GUESTTOKEN = RestAddresses.baseUrl + 'guest-token'
    static readonly FOODS = RestAddresses.baseUrl + "foods";
    static readonly VOTE = RestAddresses.baseUrl + "votes";
    static readonly REGISTER = RestAddresses.baseUrl + "register";
    static readonly LOGIN = RestAddresses.baseUrl + "login";
    static readonly VOTE_HISTORY = RestAddresses.baseUrl + "votes/history";
    static readonly TOP_FOODS = RestAddresses.baseUrl + "top/foods";
    static readonly TOP_PROVINCES = RestAddresses.baseUrl + "top/provinces";
    static readonly TOP_PROVINCES_FOODS = RestAddresses.baseUrl + "top/province-foods";
    static readonly INFO = RestAddresses.baseUrl + "info";
    static readonly ADDFOOD = RestAddresses.baseUrl + "add-food";

    static readonly SEARCH_EQUALFOOD = RestAddresses.baseUrl + "search";
    static readonly FARAJI_INFO = RestAddresses.baseUrl + "faraji-info";
    // mobile Only

    static readonly SEARCH_PRIV = RestAddresses.baseUrl + 'provinces';
}