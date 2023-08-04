import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { SellerService } from '../services/seller.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn$: Observable<boolean> | undefined;
  menuType:string = "default";
  userName:any;

  constructor(private router:Router,private sellService:SellerService, prodSer:ProductService){}

    ngOnInit(){
            this.router.events.subscribe((val:any)=>
            {  
                //console.warn(val.url)
                if(val.url){
                  if(localStorage.getItem('Seller'))
                  {
                  //  console.warn("Inside Auth Guard")
                      this.menuType = "Seller";                      
                  }
                  else{
                    this.menuType = "default";
                  }
                }
            })
    }

    SearchP(query:KeyboardEvent){

        if(query)
        {
            const element = query.target as HTMLInputElement; 
            console.warn(element.value)                                    
        }

        }

  SignOut()
  {
    localStorage.removeItem('Seller');
    this.router.navigate(['seller-auth']);   
  }

}
