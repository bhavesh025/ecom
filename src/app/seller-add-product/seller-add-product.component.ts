import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { product } from '../datatype';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {

  constructor(private addpro:SellerService, private toastr:ToastrService){}
  AddProduct(data:product)
  {
      this.addpro.AddProductApi(data).subscribe((res)=>{
          if(res)
          {
           //   alert('Add Product SuccessFully..');              
           this.toastr.success("Success","Add Product SuccessFully"); 
          }
      })
  }

}
