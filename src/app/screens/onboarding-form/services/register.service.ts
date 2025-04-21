import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OwnerList } from 'src/app/models/owner-request';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient : HttpClient) { }


  registerOwnerDetails(ownerList : OwnerList){
      console.log('The function has captured the data of ',ownerList.owners)
      console.log('Called the register owner details !');
  }

}
