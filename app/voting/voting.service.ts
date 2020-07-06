import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { RestAddresses } from '../Core/Content/RestAddresses';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class VotingService {
    get token(): string {
        return localStorage.getItem('guest_token');
    }
    constructor (private httpClient: HttpClient) { }

    setVote(province_id: number, food_ids: any[]): Observable<any> {
        const guest_token = this.token;
        return this.httpClient.post<Response>(RestAddresses.VOTE, { province_id, food_ids, guest_token })
    }
}
