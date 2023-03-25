import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // value1:any, value2:any, value3:any, value4:any
  value1:any = "data 1";
  value2:any = "data 2";
  value3:any = "data 3";
  value4:any = "data 4";

  liveCounter:any=1;


  private posturl = 'https://ajay-bbdd1-default-rtdb.firebaseio.com/liveDownloader/downloader.json'
  constructor(private _http:HttpClient){}
  ngOnInit(){
    this._http.get(this.posturl)
    .subscribe(res=>{
      console.log(res);
      this.liveCounter =  res;
    })
   
  }

  postData(){
 
  }


}
