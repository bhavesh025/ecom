import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  trndyProduct(){
      return this.http.get<product[]>("http://localhost:3000/product?_limit=6");
  }

  
}
