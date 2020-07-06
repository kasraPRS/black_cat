import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './score_desktop/score.component';
import { ScoreListModule } from '../Share/score-list/score-list.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component:ScoreComponent
    }
]

@NgModule({
  declarations: [ScoreComponent],
  imports: [
      CommonModule,
      ScoreListModule,
      RouterModule.forChild(routes)
  ]
})
export class ScoreModule { }
