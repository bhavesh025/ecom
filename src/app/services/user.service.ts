import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { login, signUp} from '../datatype';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private router:Router) { }

  signUpUser(user:signUp){
      //console.warn("User API",data)
      this.http.post('http://localhost:3000/users',user)
      .subscribe((result)=>{
          console.warn(result)
          if(result){
              localStorage.setItem('user',JSON.stringify(result));
              this.router.navigate(['/']);
          }
      })
    }

    userLogin(data:login)
    {   
        console.warn("From API",data);
        this.http.get<signUp[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`)
        .subscribe((res)=>{
               
                const checkLogin = res.find((a:any)=>{
                    return a.email === data.email && a.password === data.password
                })
            if(checkLogin)
                {
                    alert("User Success login");
                    localStorage.setItem('user',JSON.stringify(res));
                    this.router.navigate(['/']);
                }
                else{
                    alert("Invalid Credential");
                }
               
        })
    }

    userAuthReload(){
        if(localStorage.getItem('user'))
        {
            this.router.navigate(['/']);
        }
    }


}