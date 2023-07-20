import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn$: Observable<boolean> | undefined;
  constructor(private router:Router,private sellService:SellerService){}


  SignOut()
  {
    localStorage.removeItem('user');
    this.router.navigate(['']);    
  }

}
