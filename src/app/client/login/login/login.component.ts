import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login:any = []
  constructor(private http:HttpClient) { 
    this.http.get("http://localhost:2000/login").subscribe((res:any)=>{
      console.log(res)
      res.forEach((ele:any)=>{
        this.login.push(ele)
      })      
    })

  }

  ngOnInit(): void {
  }
  Login(data:any){
    this.login.forEach((ele:any)=>{
      if(ele.username==data.uname){
        console.log(ele.username,data.uname)
      }
    })
  }
}
