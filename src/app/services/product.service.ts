import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { cart, product } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cartData = new EventEmitter<product [] | []>();

  url = "http://localhost:3000/product/";
  constructor(private http: HttpClient) { }

  trndyProduct() {
    return this.http.get<product[]>("http://localhost:3000/product?_limit=8");
  }
  getProductId(id: any) {
    return this.http.get<product>(this.url + id);
  }

  UpdateProductData(data: product) {
    return this.http.put<product>(this.url + data.id, data);
  }

  searchProduct(query: string) {
    return this.http.get<product[]>(`http://localhost:3000/product?q=${query}`);
  }

localAddToCart(data:product) {
  // Retrieve the existing cart data from localStorage
  let localCart = localStorage.getItem('localCart');
  let cartData = [];

  if (localCart) {
    // If there's existing cart data, parse it
    cartData = JSON.parse(localCart);
  }

  // Add the new product data to the cartData array
  cartData.push(data);

  // Store the updated cartData back in localStorage
  localStorage.setItem('localCart', JSON.stringify(cartData));

  this.cartData.emit(cartData);
}

removeitemfromCart(productId:number){
    let cartData = localStorage.getItem('localCart');
    if(cartData)
    {
      let items:product[] = JSON.parse(cartData);
      items = items.filter((item:product)=>productId!==item.id);
      console.warn(items)
      localStorage.setItem('localCart',JSON.stringify(items));
      this.cartData.emit(items);
    }
}

addToCart(cartData:cart)
{
    return this.http.post('http://localhost:3000/cart',cartData);
}

}
