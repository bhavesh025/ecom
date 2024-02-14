import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { SellerService } from '../services/seller.service';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn$: Observable<boolean> | undefined;
  menuType: string = "default";
  sellerName : string="";
  userName: string="";
  searchResult: undefined | product[];
  cartItems=0;
  constructor(private router: Router, private sellService: SellerService, private prodSer: ProductService) { }

  ngOnInit() {
    this.router.events.subscribe((val: any) => {
      //console.warn(val.url)
      if (val.url) {
        if (localStorage.getItem('Seller')) {
              let sellerStore = localStorage.getItem('Seller');
              //let sellerData = sellerStore && JSON.parse(sellerStore)[0];
              let sellerData = sellerStore && JSON.parse(sellerStore);
              this.sellerName = sellerData.name; // some problem
              this.menuType = "Seller";
              //console.warn("Get Name",sellerData.name)
        }
        else if(localStorage.getItem('user'))
        {
            let userStore = localStorage.getItem('user');
            let userData = userStore && JSON.parse(userStore);
            this.userName = userData.name;          
            this.menuType = "user";
        }
        else {
          this.menuType = "default";
        }
      }
    })

      let cartData = localStorage.getItem('localCart');
      if(cartData)
      {
          this.cartItems = JSON.parse(cartData).length;
      }
      this.prodSer.cartData.subscribe((items)=>{
          this.cartItems = items.length;
      })
  }

  SearchP(query: KeyboardEvent) {

    if (query) {
      const element = query.target as HTMLInputElement;
      //console.warn(element.value)
      this.prodSer.searchProduct(element.value).subscribe((res: any) => {
        // console.warn(result)
        if (res.length > 5) {
          res.length = 5
        }
        this.searchResult = res;

      })
    }
  }

  hideSearch() {
    this.searchResult = undefined;
  }
  redirecttoDetails(id: number) {
    this.router.navigate(['/details/' + id]);
  }

  submitSearch(val: string) {
    this.router.navigate([`search/${val}`])
  }

  SignOut() {
    localStorage.removeItem('Seller');
    this.router.navigate(['seller-auth']);
  }

  Logout()
  {
      localStorage.removeItem('user');
      this.router.navigate(['/user-auth']);
  }

}
