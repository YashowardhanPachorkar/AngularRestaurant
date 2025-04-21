export class OwnerRequest{
    FirstName: string = ''; 
    MiddleName: string = ''; 
    LastName: string = ''; 
    CountryCode: string = ''; 
    PhoneNumber: number = 0;
    OwnerEmail: string = ''; 
    GovermentIdType: string = '';
    GovemermentId: string = '';
    password: string = '';
    cpassword: string = '';
}

export class OwnerList{
    owners: OwnerRequest[] = []; 
}
