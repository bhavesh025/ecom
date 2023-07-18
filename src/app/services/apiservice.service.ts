import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  viewAll()
  {
    console.warn("Api Called");
      return this.http.get("http://localhost:3000/user");      
  }
}
