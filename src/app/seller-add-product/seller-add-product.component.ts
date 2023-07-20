import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { product } from '../datatype';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {

  constructor(private addpro:SellerService){}
  AddProduct(data:product)
  {
      this.addpro.AddProductApi(data).subscribe((res)=>{
          if(res)
          {
              alert('Add Product SuccessFully..');              
          }
      })
  }

}
