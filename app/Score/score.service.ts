import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RestAddresses } from '../Core/Content/RestAddresses';
import { Observable } from 'rxjs';

import { ScoreList } from '../DTO/score-list';
import { TopProvincesList } from '../DTO/top-province-list';

@Injectable({
    providedIn: 'root'
})
export class ScoreService {
    get token(): string {
        return localStorage.getItem("guest_token");
    }
    constructor (private httpClient: HttpClient) { }

    citiesScore(page: number): Observable<ScoreList> {
        return this.httpClient.post<ScoreList>(RestAddresses.TOP_FOODS, { page });
    }

    toProvinces(): Observable<TopProvincesList> {
        const guest_token = this.token;
        return this.httpClient.post<TopProvincesList>(RestAddresses.TOP_PROVINCES, guest_token);

    }

}
