import { Component, OnInit } from '@angular/core';
import { StartService } from 'src/app/Core/Service/start.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private service: StartService) { }
    submit(text: string) {
        console.log('text', text);

    }
    ngOnInit() {
        this.service.getFuckingTest().subscribe(
            r => {
                console.log(r);

            }
        );

        if (!localStorage.getItem('guest_token')) {
            this.service.getToken().subscribe(
                r => {
                    localStorage.setItem('guest_token', r['guest_token']);
                }
            );
        }
    }

}
