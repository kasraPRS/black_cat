import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        FooterComponent
    ],
    declarations: [
        FooterComponent
    ]
})
export class FooterModule { }