import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterModule } from '../Share/footer/footer.module';
import { VotingListModule } from '../Share/voting-list/voting-list.module';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FooterModule,
        VotingListModule
    ],
    declarations: [HomeComponent, MapComponent]
})
export class HomeModule { }
