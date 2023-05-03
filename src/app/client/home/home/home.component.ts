import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LogoutService } from 'src/app/services/logout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  IsOpen1:boolean = true
  IsOpen2:boolean = false
  IsOpen3:boolean = false

  icon1:string = ""
  icons2:string = ""
  icons3:string = ""

  fastfood:any = []
  beverages:any = []
  snacks:any = []


  constructor(private http:HttpClient,private log:LogoutService) { }
  ngOnInit(): void {
    this.http.get('http://localhost:2000/menu').subscribe((res:any)=>{
      console.log(res)
      res.forEach((ele:any)=>{
        if(ele.item_type == 'ff'){
          this.fastfood.push(ele)
          console.log(this.fastfood)
        }
        else if(ele.item_type == 'b'){
          this.beverages.push(ele)
          console.log(this.beverages)

        }
        else{
          this.snacks.push(ele)
          console.log(this.snacks)

        }
      })
    })
  }
  

  Open(n:any){
    if(n==1){
      this.IsOpen1 =!this.IsOpen1
      this.IsOpen2 = false
      this.IsOpen3 = false
     
  }
    if(n==2){
      this.IsOpen2 =!this.IsOpen2
      this.IsOpen1 = false
      this.IsOpen3 = false
      
    }
    if(n==3){
      this.IsOpen3 =!this.IsOpen3
      this.IsOpen2 = false;
      this.IsOpen1 = false
      
  }

  }
  logout(){
    this.log.Logout()
  }
}
