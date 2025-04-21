import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderRestraurantsComponent } from './components/render-restraurants/render-restraurants.component';

const routes: Routes = [
  {
    path:'', 
    component:RenderRestraurantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestraurantsRoutingModule { }
