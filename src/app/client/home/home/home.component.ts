import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  IsOpen1:boolean = true
  IsOpen2:boolean = false
  IsOpen3:boolean = false

  constructor() { }

  ngOnInit(): void {
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
}
