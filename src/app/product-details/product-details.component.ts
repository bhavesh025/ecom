import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { cart, product } from '../datatype';
@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
    //productData: undefined | product;
    productData: any;
    productQuntity: number = 1;
    qty: number = 1;
    removeCart = false;
    jsonValue: any;
    valueFromJson: any;

    constructor(private activeroute: ActivatedRoute, private prodSer: ProductService) { }

    ngOnInit(): void {
        let productId = this.activeroute.snapshot.paramMap.get('productId')
        //console.warn(productId);

        productId && this.prodSer.getProductId(productId).subscribe((res) => {
            this.productData = res;
        })

        let cartData = localStorage.getItem('localCart')
        if (productId && cartData) {
            let items = JSON.parse(cartData);
            items = items.filter((item: product) => productId == item.id.toString())
            if (items.length) {
                this.removeCart = true;
            }
            else {
                this.removeCart = false;
            }
        }
    }

    handleQty(val: string) {
        if (this.productQuntity < 20 && val === 'plus') {
            this.productQuntity += 1;
        }
        else if (this.productQuntity > 1 && val === 'min') {
            this.productQuntity -= 1;
        }
    }

    AddToCart() {
        if (this.productData) {
            this.productData.quntity = this.productQuntity;
            if (!localStorage.getItem('user')) {
                this.prodSer.localAddToCart(this.productData);
                this.removeCart = true;
            }
            else {

                let user = localStorage.getItem('user');
                let userId = user && JSON.parse(user)[0].id;                

                let cartData: cart = {
                    ...this.productData,
                    userId,
                    productId: this.productData.id                    
                }
                delete cartData.id;
                console.warn("Add in Cart",cartData.id);
                this.prodSer.addToCart(cartData).subscribe((result) => {
                    if (result) {
                        alert("Product Added into cart");
                    }
                })
            }
        }
    }

    removeToCart(productId: number) {
        debugger
        this.prodSer.removeitemfromCart(productId);
        this.removeCart = false;
    }
}
