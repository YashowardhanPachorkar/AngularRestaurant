import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingFormRoutingModule } from './onboarding-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms'; 
import { OwnerRegistrationComponent } from './components/owner-registration/owner-registration.component';
import { RestraurantRegistrationComponent } from './components/restraurant-registration/restraurant-registration.component';
import { CombinedRegistrationComponent } from './components/combined-registration/combined-registration.component';
import {HttpClientModule} from '@angular/common/http'; 
import { RegisterService } from './services/register.service';


@NgModule({
  declarations: [ 
    OwnerRegistrationComponent, RestraurantRegistrationComponent, CombinedRegistrationComponent
  ],
  imports: [
    CommonModule,
    OnboardingFormRoutingModule, 
    ReactiveFormsModule, 
    HttpClientModule
  ], 
  providers:[RegisterService]
})



export class OnboardingFormModule { }