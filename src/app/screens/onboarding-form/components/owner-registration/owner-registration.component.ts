import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OwnerList, OwnerRequest } from 'src/app/models/owner-request';
import { RegisterService } from '../../services/register.service';


@Component({
  selector: 'app-owner-registration',
  templateUrl: './owner-registration.component.html',
  styleUrls: ['./owner-registration.component.css'], 
})


export class OwnerRegistrationComponent {  
  // ownerDetails = new FormGroup({
  //   FirstName: new FormControl<string>(''), 
  //   MiddleName: new FormControl<string>(''), 
  //   LastName: new FormControl<string>(''), 
  //   CountryCode: new FormControl<string>(''),
  //   PhoneNumber: new FormControl<number>(0), 
  //   OwnerEmail: new FormControl<string>(''),
  //   GovermentIdType: new FormControl<string>(''),
  //   GovemermentId: new FormControl<string>(''), 
  //   password: new FormControl<string>('')
  // });
  ownerRequest: OwnerRequest = new OwnerRequest();
  ownerList: OwnerList = new OwnerList();
  @Output() formTypeChange = new EventEmitter<string>();


  constructor(private formBuilder : FormBuilder,private registerService:RegisterService){}


  ownersDetails = this.formBuilder.group({
        FirstName: new FormControl<string>('',[Validators.required, Validators.minLength(2),Validators.maxLength(100),Validators.pattern('^[A-Za-z]+$')]), 
        MiddleName: new FormControl<string>('',[Validators.required, Validators.minLength(2),Validators.maxLength(100),Validators.pattern('^[A-Za-z]+$')]), 
        LastName: new FormControl<string>('',[Validators.required, Validators.minLength(2),Validators.maxLength(100),Validators.pattern('^[A-Za-z]+$')]), 
        CountryCode: new FormControl<string>('',[Validators.required]),
        PhoneNumber: new FormControl<string>('',[Validators.required, Validators.maxLength(15),Validators.minLength(10)]), 
        OwnerEmail: new FormControl<string>('',[Validators.required,Validators.email]),
        GovermentIdType: new FormControl<string>('',[Validators.required]),
        GovemermentId: new FormControl<string>('',[Validators.required]), 
        password: new FormControl<string>('',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
        cpassword: new FormControl<string>('',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])
  })
 



  // dispatchDetails(){
  //   // event.preventDefault();
  //   if(this.ownersDetails.valid && this.ownersDetails.value['cpassword'] == this.ownersDetails.value['password'] && this.ownersDetails.value['cpassword'] != "" && this.ownersDetails.value['password'] != ""){
  //     console.log(this.ownersDetails);
  //     this.createRequest(this.ownersDetails);
  //   }
  //   else{
  //     console.log('form data is invalid !');
  //   }
  // }


  addMore(){
    
    if(this.ownersDetails.valid && this.ownersDetails.value['cpassword'] == this.ownersDetails.value['password'] && this.ownersDetails.value['cpassword'] != "" && this.ownersDetails.value['password'] != ""){
      console.log(this.ownersDetails);
      this.addMoreEmployee(this.ownersDetails);
    }
    else{
      console.log('form data is invalid !');
    }
  }

  submitOwnerDetails(){
    console.log('Submitting the owners data function invoked !!');
    this.formTypeChange.emit('restaurant');         
    this.registerService.registerOwnerDetails(this.ownerList); 
  }

  addMoreEmployee(details : FormGroup){
      this.ownerRequest.FirstName = details.value['FirstName']; 
      this.ownerRequest.MiddleName = details.value['MiddleName']; 
      this.ownerRequest.LastName = details.value['LastName']; 
      this.ownerRequest.CountryCode = details.value['CountryCode']; 
      this.ownerRequest.PhoneNumber = details.value['PhoneNumber']; 
      this.ownerRequest.OwnerEmail = details.value['OwnerEmail']; 
      this.ownerRequest.GovermentIdType = details.value['GovermentIdType']; 
      this.ownerRequest.GovemermentId = details.value['GovemermentId']; 
      this.ownerRequest.password = details.value['password']; 
      this.ownerRequest.password = details.value['cpassword']; 
      console.log("Adding the data of the: ",this.ownerRequest);
      this.ownerList.owners.push(details.value); 
      console.log("The resultant data is: ",this.ownerList.owners); 
  }
}