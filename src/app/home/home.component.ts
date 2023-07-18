import { Component } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    items:any = [];
    constructor(private apidata:ApiserviceService){
     
      this.apidata.viewAll().subscribe((data)=>{
          this.items = data;
          console.warn(data);
        });
     
    }

    

}
