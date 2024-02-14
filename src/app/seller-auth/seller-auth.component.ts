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
  
  constructor(private sellSer:SellerService, private router:Router){}
 
  ngOnInit(){
        this.sellSer.reload();        
  }

  signUp(item:any){

      this.sellSer.signUpUser(item).subscribe((res)=>{
            if(res){
                alert('Seller Register SuccessFully...');
                this.isLogin=false;
            }   });      
        }
    signIn(item:any){
      this.sellSer.signInUser(item);
    }

    gotoReg(){
    this.isLogin=true;
  }
  gotoLogin(){
    this.isLogin=false;
  }

}

