import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './screens/homepage/homepage.module';
import { OnboardingFormModule } from './screens/onboarding-form/onboarding-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule, 
    HomepageModule, 
    OnboardingFormModule // when i have not imported that module it gave me: error NG8002: Can't bind to 'formGroup' since it isn't a known property of 'form
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
