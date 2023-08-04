import { CanActivateFn, Router } from '@angular/router';
import { SellerService } from './services/seller.service';

/*export const authGuard: CanActivateFn = (route, state) => {
    return true;
};*/

export const authGuard = (userdata:SellerService, router:Router)=>
{
    let userLog = localStorage.getItem('Seller');

    if(userLog){
        return userdata.loggedIn;        
    }
    else{
        return false;        
    }
}

