import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestraurantsRoutingModule } from './restraurants-routing.module';
import { RenderRestraurantsComponent } from './components/render-restraurants/render-restraurants.component';


@NgModule({
  declarations: [
    RenderRestraurantsComponent,
  ],
  imports: [
    CommonModule,
    RestraurantsRoutingModule
  ]
})
export class RestraurantsModule { }
