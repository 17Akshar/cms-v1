import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) { }
  user_data:any = []
  getData(){
    this.http.get("http://localhost:2000/login").subscribe((res)=>{
      this.user_data = res
    })
  }
  sendData(){
    return this.user_data;
  }
}
