import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from '../pipe/shorten.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ShortenPipe
    ],
    declarations: [
        ShortenPipe,
    ]
})
export class ShareModule { }
