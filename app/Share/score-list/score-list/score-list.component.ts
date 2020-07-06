import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ScoreList } from 'src/app/DTO/score-list';

@Component({
    selector: 'score-list',
    templateUrl: './score-list.component.html',
    styleUrls: ['./score-list.component.scss']
})
export class ScoreListComponent implements OnInit {

    @Input() listItem: ScoreList;
    @Input() moreButton: boolean;
    @Output() test = new EventEmitter<number>();
    // @Input() hidenButton: boolean = false;
    counter = 1;
    constructor () { }

    more() {

        this.counter = this.counter + 1;
        this.test.emit(this.counter);
        
    }

    ngOnInit(): void {

    }

}
