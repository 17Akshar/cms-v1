import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {
  user_data:any = []
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:2000/login').subscribe((res:any)=>{
      console.log(res.result)
      this.user_data = res.result
    })
  }

}
