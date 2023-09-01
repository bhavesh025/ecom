import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerProductListComponent } from './seller-product-list/seller-product-list.component';
import { SellerProductEditComponent } from './seller-product-edit/seller-product-edit.component';
import { authGuard } from './auth.guard';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
    {path:"",component:HomeComponent, pathMatch:'full'},    
    {path:"About",component:AboutComponent },
    {path:"user-auth",component:UserAuthComponent },
    {path:"seller-auth",component:SellerAuthComponent },
    {path:"Contact",component: ContactComponent},
    {path:"seller-login",component: SellerLoginComponent},
    {path:"seller-home",component: SellerHomeComponent, canActivate:[authGuard]},
    {path:"seller-add-product",component:SellerAddProductComponent, canActivate:[authGuard]},
    {path:"seller-product-list",component:SellerProductListComponent, canActivate:[authGuard]},
    {path:"seller-product-edit/:id",component:SellerProductEditComponent, canActivate:[authGuard]},
    {path:"search/:query", component:SearchComponent},
    {path:"details/:productId", component:ProductDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
