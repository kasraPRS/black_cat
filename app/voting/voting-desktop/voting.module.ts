import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingComponent } from './voting.component';
import { VotingListModule } from 'src/app/Share/voting-list/voting-list.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: VotingComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        VotingListModule,
        RouterModule.forChild(routes)
    ],
    declarations: [VotingComponent]
})
export class VotingModule { }
