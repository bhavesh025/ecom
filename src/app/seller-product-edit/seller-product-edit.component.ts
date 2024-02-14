import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-seller-product-edit',
  templateUrl: './seller-product-edit.component.html',
  styleUrls: ['./seller-product-edit.component.css']
})
export class SellerProductEditComponent {

  constructor(private aroute:ActivatedRoute, private proSer:ProductService, private route:Router,private toastr:ToastrService){}
  productData: undefined | any
    ngOnInit(){
      let newId = this.aroute.snapshot.paramMap.get('id');
        console.warn("Value from URL",newId)
        newId && this.proSer.getProductId(newId).subscribe((res)=>{
             console.warn("Data from API 123",res)
             this.productData = res;
        })
    }
    updateProduct(data:product){    
      //    console.warn("Data Update",data);
    //      console.warn("Data Update",this.productData[0].id);
    
          if(this.productData){
                data.id=this.productData[0].id
          }    
          debugger      
          this.proSer.UpdateProductData(data).subscribe((result)=>{                        
              this.toastr.info("Updated",'Update Product Successfully');
              this.route.navigate(['seller-product-list']);
              
          })
    }

}
