import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreListComponent } from './score-list/score-list.component';



@NgModule({
    declarations: [ScoreListComponent],

    imports: [
        CommonModule
    ],

    exports: [
        ScoreListComponent
    ]
})
export class ScoreListModule { }
