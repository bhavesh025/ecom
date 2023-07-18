import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }

  signUpUser(data:any){
      return  this.http.post("http://localhost:3000/user",data);
  }

  signInUser(data:any){
    return this.http.get<any>("http://localhost:3000/user");

    //http://localhost:3000/user?email=jigar@gmail.com&password=654321
}

}
