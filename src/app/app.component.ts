import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  view:boolean = false;
  constructor(private login:LoginService){}
  GetData(data:any){
    this.view = data
    console.log(data)
  }
}
