import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isdown:boolean = false;
  icons:any = "arrow_drop_down_circle"
  flag:number = 1; //1 - 1st clicked ;0 - 2nd clicked
  constructor() { }
  ngOnInit(): void {
  }
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
  }
}
