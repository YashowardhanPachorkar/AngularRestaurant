import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullhomepageComponent } from './components/fullhomepage/fullhomepage.component';

const routes: Routes = [
  {
    path:'',
    component:FullhomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
