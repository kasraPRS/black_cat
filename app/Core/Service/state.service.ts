import { Injectable, ElementRef } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
    providedIn: 'root'
})
export class StateService {
    appContainer: ElementRef;

    private isMobileResolution: boolean;

    constructor (private deviceService: DeviceDetectorService) {
        this.isMobileResolution = this.deviceService.isMobile();
    }

    isMobile() {
        return this.isMobileResolution;
    }

    isDesktop() {
        return !this.isMobileResolution;
    }

    scrollToTop() {
        if (this.appContainer && this.appContainer.nativeElement) {
            this.appContainer.nativeElement.scrollToTop = 0;
        }
    }

}
