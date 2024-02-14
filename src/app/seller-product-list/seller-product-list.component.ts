import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { product } from '../datatype';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.component.html',
  styleUrls: ['./seller-product-list.component.css']
})
export class SellerProductListComponent {

  constructor(private sellSer: SellerService, private product: ProductService, private http:HttpClient) { }
  productdata: any;
  ngOnInit() {
    this.list();
  }
  delProduct(id: number) {
    //console.warn(id);
    debugger
    this.http.delete(`http://localhost:5000/product/`+id).subscribe((res: any) => {
      debugger
      console.warn("Result", res);

      if (res.length>0) {
        debugger
        this.list();
        alert("Data Delete");
      } else {
        debugger
        alert("Data Not Delete");
      }
    })
  }

 /*
  delProduct(productId: number){
    debugger;
    //const url = `http://localhost:3000/product/${productId}`;
    //const url = `http://localhost:5000/product/${productId}`;
    this.http.delete(`http://localhost:5000/product/`+productId).subscribe(
      (response: any) => {
        debugger;
        console.log("Product deleted successfully. Response:", response);
      },
      (error: any) => {
        if (error.status === 404) {
          console.error(`Product with ID ${productId} not found.`);
        } else {
          console.error("An error occurred while deleting the product:", error);
        }
      }
    );
  } */

  list() {
    this.sellSer.ListProductApi().subscribe(response => {
      this.productdata = response
    });
  }

}
