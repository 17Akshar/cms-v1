import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Output ,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private login:LoginService,private route:Router) {}
  ngOnInit(): void {
  }
  response_data:any 
  res:boolean = false;
  Login(data:any){
    console.log(data)
  }
}
