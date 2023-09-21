import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { product } from '../datatype';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  loggedIn = new BehaviorSubject<boolean>(false);
  
   constructor(private http:HttpClient, private router:Router, private toastr: ToastrService) { }
   userlogin:any;
  signUpUser(data:any){
      return  this.http.post("http://localhost:3000/user",data);
  }

  signInUser(data:any){
      this.http.get<any>("http://localhost:3000/user").subscribe((res)=>{
        const SellUser = res.find((a:any)=>{
            return a.email === data.email && a.password === data.password 
        });
        if(SellUser)
        {
          //alert('Login Successful');
          this.toastr.success("Success","Login Successful");  
          this.userlogin = SellUser;          
          this.loggedIn.next(true);
          this.router.navigate(['seller-product-list']);  
          localStorage.setItem('Seller',JSON.stringify(this.userlogin));                  
        }
        else
        {
            this.toastr.error("Invalid Credential","Please provide valid credential");  
            //alert('Login Not Working 123'); TOASTER ADDED            
        }
    })     
    
  }

  reload(){
          if(localStorage.getItem('Seller')) 
          {
              this.loggedIn.next(true);
              this.router.navigate(['seller-home']);
          }
    }

  AddProductApi(data:product){
        return this.http.post("http://localhost:3000/product",data);
  }
  ListProductApi(){
      return this.http.get("http://localhost:3000/product");
  }

  popularProduct(){
    return this.http.get<product[]>("http://localhost:3000/product?_limit=3");
  }

}
