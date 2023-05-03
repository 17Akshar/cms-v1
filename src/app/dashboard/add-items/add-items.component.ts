import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})
export class AddItemsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  img :any = ""
  // menu_data:any = {}
  ngOnInit(): void {
  }
  timerInterval:any = ""
  GetItems(data:any){
    const formD = new FormData();
    formD.append('itemimg',this.img)
    // this.menu_data = data;
    formD.append('itemname',data.itemname);
    formD.append('itemprice',data.itemprice);
    formD.append('itemtype',data.itemtype);
    // formD.append('data',data)
    this.http.post('http://localhost:2000/add-items',formD).subscribe((res:any)=>{
      console.log(res);
      if(res.item_add == true){
      
Swal.fire({
  title: 'Item Added Successfully!',
  timer:1500,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    this.timerInterval = setInterval(() => {
    }, 1500)
  },
  willClose: () => {
    clearInterval(this.timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
      }
    })
  }
  getImg(img:any){
    console.log(img.target.files[0].name)
    const file  = img.target.files[0]
    this.img = file 
  } 
}
