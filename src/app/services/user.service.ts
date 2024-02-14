import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { login, signUp } from '../datatype';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    invaliduserAuth = new EventEmitter<boolean>(false);

    constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

    signUpUser(user: signUp) {
        //console.warn("User API",data)
        //this.http.post('http://localhost:3000/users', user)
        this.http.post('http://localhost:5000/users', user)
            .subscribe((result) => {
                console.warn(result)
                if (result) {
                    localStorage.setItem('user', JSON.stringify(result));
                    this.router.navigate(['/']);
                }
            })
    }
    /*
           userLogin(data: login) {                
            //this.http.get<signUp[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`)
            this.http.post<signUp[]>(`http://localhost:5000/userverify`,data).subscribe((res) => {
                    console.warn(res);
                   let abc =  localStorage.setItem('user', JSON.stringify(res[0]));
                    console.warn("abc ",abc)
                })
        }
    */
    userLogin(data: any) {
        //this.http.get<any>("http://localhost:3000/users").subscribe((res)=>{            
        this.http.get<any>("http://localhost:5000/users").subscribe((res) => {
            const user = res.find((a: any) => {
                return a.email === data.email && a.password === data.password
            });

            if (user) {
                this.toastr.success("Success", "Login Successful");
                localStorage.setItem('user', JSON.stringify(user));
                this.router.navigate(['/']);
            }
            else {
                this.toastr.error("Invalid Credential", "Please provide valid credential");
                this.invaliduserAuth.emit(true);
            }
        })

    }

    userAuthReload() {
        if (localStorage.getItem('user')) {
            this.router.navigate(['/']);
        }
    }


}