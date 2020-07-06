import { Injectable } from '@angular/core';
import { RestAddresses } from '../Content/RestAddresses';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class StartService {

    constructor(private httpClient: HttpClient) { }
    getFuckingTest() {
        return this.httpClient.get<Response>(RestAddresses.TESTKIR)
    }
    getToken() {
        return this.httpClient.post<Response>(RestAddresses.GUESTTOKEN, null);
    }
}
