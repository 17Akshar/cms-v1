import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private route :Router) { }
  Logout(){
    alert("ARE YOU SURE YOU WANT TO LOGOUT")
    localStorage.removeItem("user_id");
    localStorage.removeItem("message");
    this.route.navigate(['/login'])
  }
}
