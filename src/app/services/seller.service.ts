import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { product } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private loggedIn = new BehaviorSubject<boolean>(false);

   constructor(private http:HttpClient) { }

  signUpUser(data:any){
      return  this.http.post("http://localhost:3000/user",data);
  }

  signInUser(data:any){
    return this.http.get<any>("http://localhost:3000/user"); 
    //http://localhost:3000/user?email=jigar@gmail.com&password=654321
  }

  AddProductApi(data:product){
        return this.http.post("http://localhost:3000/product",data);
  }
  ListProductApi(){
      return this.http.get("http://localhost:3000/product");
  }

  popularProduct(){
    return this.http.get<product[]>("http://localhost:3000/product?_limit=2");
  }

}
