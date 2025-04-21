import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-combined-registration',
  templateUrl: './combined-registration.component.html',
  styleUrls: ['./combined-registration.component.css']
})
export class CombinedRegistrationComponent {
   formType = 'owner'; 

   updateFormType(newFormType: string) {
      this.formType = newFormType; 
      console.log(this.formType);
    }

}
