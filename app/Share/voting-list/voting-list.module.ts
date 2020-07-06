import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingListComponent } from './voting-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFieldsModule } from '../input-fields/input-fields.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputFieldsModule
  ],
  exports: [
    VotingListComponent
  ],
  declarations: [VotingListComponent]
})
export class VotingListModule { }
