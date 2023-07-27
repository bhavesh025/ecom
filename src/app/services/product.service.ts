import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url="http://localhost:3000/product/";
  constructor(private http:HttpClient) { }

  trndyProduct(){
      return this.http.get<product[]>("http://localhost:3000/product?_limit=8");
  }
  getProductId(id:any){
      return this.http.get(this.url+id);
  }

  UpdateProductData(data:product)
  {
      return this.http.put<product>(this.url+data.id,data);
  }

  
}
