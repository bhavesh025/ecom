import { Component } from '@angular/core';
import { login, signUp} from '../datatype';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  userisLogin = true;

  constructor(private userSer:UserService){}

  ngOnInit():void{
      this.userSer.userAuthReload()
  }
  uSignUp(data:signUp)
  {
      //console.warn(data)
       this.userSer.signUpUser(data)
  }
  uLogin(data:login)
  {
      //console.warn(data)
       this.userSer.userLogin(data);
  }

  goTouserReg() {
    this.userisLogin = false;
  }
  goTouserLogin() {
    this.userisLogin = true;
  }
}
