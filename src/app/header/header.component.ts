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
  sellerName : string='';
  userName: string='';
  searchResult: undefined | product[];

  constructor(private router: Router, private sellService: SellerService, private prodSer: ProductService) { }

  ngOnInit() {
    this.router.events.subscribe((val: any) => {
      //console.warn(val.url)
      if (val.url) {
        if (localStorage.getItem('Seller')) {
               this.menuType = "Seller";
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
