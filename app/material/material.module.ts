import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
@NgModule({
    declarations: [],
    imports: [
        MatProgressBarModule,
        MatCardModule
    ],
    exports: [
        MatProgressBarModule,
        MatCardModule
    ]
})
export class MaterialModule { }
