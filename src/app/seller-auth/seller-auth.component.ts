import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
public sellerLogin!:NgForm;
  isLogin=false;
  userdata:any;

  constructor(private sellSer:SellerService, private router:Router){}

  signUp(item:any){
      this.sellSer.signUpUser(item).subscribe((res)=>{
            if(res){
                alert('Seller Register SuccessFully...');
                this.isLogin=false;
            }   });      
        }
    signIn(item:any){
      this.sellSer.signInUser(item).subscribe(res=>{
          const user = res.find((a:any)=>{
              return a.email === item.email && a.password === item.password                                          
              
          });
          if(user){
              alert('Login Successful');
                this.userdata = user;
                this.router.navigate(['seller-home']);  
                localStorage.setItem('user',JSON.stringify(this.userdata));                 
                
            } else{
                alert("user not found");                         
              } 

        /*if(data){
              alert('Login Successful');
              this.router.navigate(['seller-home']);              
          }
          console.warn(item.email);
              console.warn(item.password);
              console.warn(res);
          */
        
        },err=>{alert("Something went wrong");});
    }


  gotoReg(){
    this.isLogin=true;
  }
  gotoLogin(){
    this.isLogin=false;
  }


}
