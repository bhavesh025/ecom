import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { product } from '../datatype';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  popularProducts: undefined | product[] 

    popProduct: any;
    trndayData:undefined | product[];
    constructor(private ApiSer:SellerService, private proSer:ProductService){   }

   ngOnInit(){
    this.ApiSer.popularProduct().subscribe((data)=>{      
      //console.warn(data);    
      this.popularProducts = data;
      //this.popProduct = data;
    })
    this.proSer.trndyProduct().subscribe((res)=>{
       // console.warn("Trandy Product",res)
        this.trndayData = res;
    });
   }


   
}
