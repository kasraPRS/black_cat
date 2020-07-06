import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './Routing/app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './Core/core.module';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './Share/share.module';
import { MaterialModule } from './material/material.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        DeviceDetectorModule.forRoot(),
        BrowserAnimationsModule,
        ShareModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
