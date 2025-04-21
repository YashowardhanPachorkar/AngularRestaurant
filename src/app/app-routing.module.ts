import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OwnerRegistrationComponent } from './screens/onboarding-form/components/owner-registration/owner-registration.component';
import { RestraurantRegistrationComponent } from './screens/onboarding-form/components/restraurant-registration/restraurant-registration.component';
import { CombinedRegistrationComponent } from './screens/onboarding-form/components/combined-registration/combined-registration.component';

const routes: Routes = [
  {
    path:'', 
    loadChildren: () =>  import('./screens/homepage/homepage.module').then((module) => module.HomepageModule)
  }, 
  {
    path:'menu', 
    loadChildren: () =>  import('./screens/restraurants/restraurants.module').then((module) => module.RestraurantsModule) 
  },
  {
    path:'register', 
    component: CombinedRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
