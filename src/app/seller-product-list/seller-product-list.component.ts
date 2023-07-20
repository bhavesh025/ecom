import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { product } from '../datatype';

@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.component.html',
  styleUrls: ['./seller-product-list.component.css']
})
export class SellerProductListComponent {

  constructor(private sellSer:SellerService){}
    productdata:any;
      ngOnInit() {
                this.sellSer.ListProductApi().subscribe(response => {
                   this.productdata = response
              });
          }
          delProduct()
          {
              alert('Delete Press ');
          }

}
