import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Output ,EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private login:LoginService,private route:Router,private http:HttpClient) {

  }
  ngOnInit(): void {
  }
  @Output() SendData = new EventEmitter<any>() 
  Login(data:any){
    console.log(data)
    this.http.get(`http://localhost:2000/login?username=${data.uname}&passcode=${data.passcode}`).subscribe((res:any)=>{
      console.log(res);
      // console.log(res.message)//TO GET THE MESSAGE
      // console.log(res.user_data[0].user_id)//TO GET USER ID
      localStorage.setItem("user_id",res.user_data[0].user_id)
      localStorage.setItem("message",res.message);
      this.SendData.emit(res.message)
      if(res.message == true){
        if(res.user_data[0].user_id == 1){
          this.route.navigate(['dashboard/add-items'])
        }
        else{
          this.route.navigate(['main-page/home'])
        }
      }
      else{
        alert("INCORRECT CREDENTIALS!")
      }
    })
  }
}
