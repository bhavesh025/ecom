import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
    productData:undefined | product;
    productQuntity:number=1;
    qty:number=1;
    constructor(private activeroute:ActivatedRoute, private prodSer:ProductService){}

    ngOnInit():void{
        let productId = this.activeroute.snapshot.paramMap.get('productId')
        //console.warn(productId);
        productId && this.prodSer.getProductId(productId).subscribe((res)=>{
            this.productData = res            
        })       
    }

    handleQty(val:string){
        if(this.productQuntity < 20 && val==='plus')
        {
            this.productQuntity+=1;
        }
        else if(this.productQuntity > 1 && val==='min')
        {
            this.productQuntity-=1;
        }
    }
}
