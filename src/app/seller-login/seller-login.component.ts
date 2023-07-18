import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent {

  constructor(private selletGet:SellerService){}

  sellerform(item:any){
        this.selletGet.signUpUser(item).subscribe();
  }
}
