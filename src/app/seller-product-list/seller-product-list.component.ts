import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { product } from '../datatype';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.component.html',
  styleUrls: ['./seller-product-list.component.css']
})
export class SellerProductListComponent {

  constructor(private sellSer:SellerService, private product:ProductService){}
    productdata:any;
      ngOnInit() {
                    this.list();
          }
          delProduct(id:number)          
          {
           // console.warn("warn id",id);
            this.product.deleteProduct(id).subscribe((res)=>{
                if(res)
                {
                    this.list();
                }
            }) 
          }

          list(){
            this.sellSer.ListProductApi().subscribe(response => {
              this.productdata = response
            });
          }

}
