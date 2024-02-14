import { Component } from '@angular/core';
import { cart, login, product, signUp } from '../datatype';
import { UserService } from '../services/user.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {

  userisLogin = true;
  authErrro: string = '';
  constructor(private userSer: UserService, private product: ProductService) { }

  ngOnInit(): void {
    this.userSer.userAuthReload()
  }
  uSignUp(data: signUp) {
    this.userSer.signUpUser(data)
  }
  uLogin(data: login) {

    this.userSer.userLogin(data);

    this.userSer.invaliduserAuth.subscribe((result) => {

      if (result) {

        this.authErrro = "Please enter valid details..";
      }
      else {
        this.localCartToRemoveCart();
      }
    })
  }

  goTouserReg() {
    this.userisLogin = false;
  }
  goTouserLogin() {
    this.userisLogin = true;
  }

  localCartToRemoveCart() {
    let data = localStorage.getItem('localCart');

    if (data) {

      let cartDataList: product[] = JSON.parse(data)
      let user = localStorage.getItem('user');
      let userId = user && JSON.parse(user)[0].id;

      console.warn("Hello", userId);


      cartDataList.forEach((product: product, index) => {

        let cartData: cart = {
          ...product,
          productId: product.id,
          userId,
        };
        delete cartData.id;
        setTimeout(() => {

          this.product.addToCart(cartData).subscribe((result) => {

            if (result) {
              console.warn("Item store Db");
            }
          })
          if (cartDataList.length === index + 1) {

            localStorage.removeItem('localCart');
          }
        }, 500);
      });

    }
  }

}






