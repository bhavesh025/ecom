import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { FormsModule } from '@angular/forms';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerProductListComponent } from './seller-product-list/seller-product-list.component';
import { SellerProductEditComponent } from './seller-product-edit/seller-product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    LoginComponent,
    ContactComponent,
    FooterComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    SellerLoginComponent,
    SellerAddProductComponent,
    SellerProductListComponent,
    SellerProductEditComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
