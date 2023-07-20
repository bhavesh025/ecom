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

const routes: Routes = [
    {path:"",component:HomeComponent},    
    {path:"About",component:AboutComponent },
    {path:"Login",component:LoginComponent },
    {path:"seller-auth",component:SellerAuthComponent },
    {path:"Contact",component: ContactComponent},
    {path:"seller-login",component: SellerLoginComponent},
    {path:"seller-home",component: SellerHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }