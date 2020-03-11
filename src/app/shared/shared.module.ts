import { NgModule } from "@angular/core";
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeardComponent } from './heard/heard.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
    declarations:[
        SidebarComponent,
        NopagefoundComponent,
        HeardComponent,
        BreadcrumbsComponent
    ],
    exports:[
        SidebarComponent,
        NopagefoundComponent,
        HeardComponent,
        BreadcrumbsComponent
    ]
    
})

export class SharedModule{}