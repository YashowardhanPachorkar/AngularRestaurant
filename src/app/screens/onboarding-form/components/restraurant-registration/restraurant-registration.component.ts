import { Component } from '@angular/core';
import { FormBuilder, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-restraurant-registration',
  templateUrl: './restraurant-registration.component.html',
  styleUrls: ['./restraurant-registration.component.css']
})
export class RestraurantRegistrationComponent {
    cities: string[] = [
        "Ahmedabad", "Bangalore", "Chennai", "Delhi", "Hyderabad", "Kolkata", "Mumbai", "Pune", "Jaipur", 
        "Lucknow", "Nagpur", "Indore", "Bhopal", "Patna", "Surat", "Kanpur", "Ludhiana", "Agra", "Varanasi",
        "Nashik", "Thane", "Vadodara", "Visakhapatnam", "Ranchi", "Guwahati", "Raipur", "Jodhpur", "Coimbatore",
        "Chandigarh", "Bhubaneswar", "Dehradun", "Noida", "Gurgaon", "Amritsar", "Faridabad", "Allahabad",
        "Gwalior", "Jabalpur", "Mysore", "Meerut", "Udaipur", "Shimla", "Srinagar", "Kochi", "Goa", "Jamshedpur"
    ];

    states: string[] = [
      "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
      "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
      "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
      "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

    specialties: string[] = [
      "North Indian Cuisine", "South Indian Cuisine", "Chinese", "Italian", "Mexican", "Continental", 
      "Mughlai", "Bengali", "Maharashtrian", "Gujarati", "Rajasthani", "Street Food", "Seafood", 
      "Vegetarian", "Vegan", "Desserts", "Barbecue", "Fast Food", "Healthy", "Organic", "Fusion"
    ];

    constructor(private fb : FormBuilder){}
    
    restraurantDetails = this.fb.group({
        restraurantName: new FormControl<string>(''), 
        restraurantDescription: new FormControl<string>(''), 
        mobileNumber: new FormControl<number>(0),
        addressLine1: new FormControl<string>(''), 
        city: new FormControl<string>(''), 
        CountryCode: new FormControl<string>('',[Validators.required]),
        state: new FormControl<string>(''),
        restraurantType: new FormControl<string>(''),
        speciality: new FormControl<string>(''), 
        foodLiscence: new FormControl<number>(0), 
        serviceType: new FormControl<string>(''), 
        openingHours: new FormControl<number>(0)
    })
  

    recievedFormData(){
      console.log(this.restraurantDetails); 
    }

}
