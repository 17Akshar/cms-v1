import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
  isdown:boolean = false;
  icons:any = "arrow_drop_down_circle"
  flag:number = 1; //1 - 1st clicked ;0 - 2nd clicked
=======
  IsOpen1:boolean = true
  IsOpen2:boolean = false
  IsOpen3:boolean = false

>>>>>>> b4b17bfb7013dc4e4e13763de4a2a4638900e603
  constructor() { }
  ngOnInit(): void {
  }
<<<<<<< HEAD
  items:any = ["fast","Beverages","Snacks"]
  Down(ele:any,index:number){
    // this.isdown = true;
    console.log(index);
    console.log(this.items[index]);
    if(this.isdown == false){
      this.isdown = true;
      this.icons = "arrow_drop_up"
    }
    else{
      this.isdown = false;
      this.icons = "arrow_drop_down_circle"
    }
=======
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

>>>>>>> b4b17bfb7013dc4e4e13763de4a2a4638900e603
  }
}
