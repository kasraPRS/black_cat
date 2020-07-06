import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { StateService } from '../Core/Service/state.service';
import { MobileRoutes } from './mobile.routes';
import { DesktopRoutes } from './desktop.routes';
import { HomeModule } from '../Home/home.module';
import { HomeComponent } from '../Home/home/home.component';


const routes: Routes = [
    // {
    //     path: '',
    //     loadChildren: () => HomeComponent
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor (private platform: StateService, private router: Router) {
        if (platform.isMobile()) {

            router.resetConfig(MobileRoutes.routes);
            
        } else {
            console.log('Hello desktop');
            
            router.resetConfig(DesktopRoutes.routes);
            
        }
    }
}
