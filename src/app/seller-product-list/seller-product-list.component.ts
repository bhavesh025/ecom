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
  /*delProduct(id: number) {
    // console.warn("warn id",id);
    debugger;
    this.product.deleteProduct(id).subscribe((res) => {
      debugger;
      console.warn("r",res);
      if (res) {
        debugger;
        alert('Delete Data');
        this.list();
      }
    })
  }*/
  delProduct(productId: number): void {
    const url = `http://localhost:3000/product/${productId}`;
  
    this.http.delete(url).subscribe(
      (response: any) => {
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
  }

  list() {
    this.sellSer.ListProductApi().subscribe(response => {
      this.productdata = response
    });
  }

}
