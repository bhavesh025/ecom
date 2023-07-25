import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { product } from '../datatype';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  popularProducts: undefined | product[] 
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

    popProduct: any;
    constructor(private ApiSer:SellerService){   }

   ngOnInit(){
    this.ApiSer.popularProduct().subscribe((data)=>{      
      console.warn(data);    
      this.popularProducts = data;
      //this.popProduct = data;
    })
   }


   
}
