import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RestAddresses } from 'src/app/Core/Content/RestAddresses';
import { FoodList } from '../../DTO/food-list';
@Injectable({
    providedIn: 'root'
})
export class MapService {
    Token: string;
    constructor(private httpClient: HttpClient) {
        this.Token = localStorage.getItem('guest_token');
    }

    getFoods(province_id): Observable<FoodList> {

        if (localStorage.getItem('guest_token')) {

            const guest_token = localStorage.getItem('guest_token');
            return this.httpClient.post<FoodList>(RestAddresses.FOODS, { province_id, guest_token });
        } else {
            const token = localStorage.getItem('Token');
            return this.httpClient.post<FoodList>(RestAddresses.FOODS, { province_id, token });
        }
    }
    checkVotedBefore() {

        const token = localStorage.getItem('Token');
        const guest_token = localStorage.getItem('guest_token');
        const _token = guest_token ? { guest_token } : { token }

        return this.httpClient.post<Response>(RestAddresses.VOTE_HISTORY, _token)
    }
    getFarajiInfo() {

        const token = localStorage.getItem('Token');
        const guest_token = localStorage.getItem('guest_token');
        const _token = guest_token ? { guest_token } : { token }

        return this.httpClient.post<Response>(RestAddresses.FARAJI_INFO, _token)
    }
}
