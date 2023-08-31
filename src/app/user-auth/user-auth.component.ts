import { Component } from '@angular/core';
import { signUp} from '../datatype';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  userisLogin = true;

  constructor(private userSer:UserService){     
  }
  uSignUp(data:signUp)
  {
   //   console.warn(data)
      this.userSer.signUpUser(data)
  }

  goTouserReg() {
    this.userisLogin = false;
  }
  goTouserLogin() {
    this.userisLogin = true;
  }

}
