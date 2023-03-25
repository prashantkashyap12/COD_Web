import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent {

  private GetUrl = 'https://ajay-bbdd1-default-rtdb.firebaseio.com/Live_result.json';
  constructor(private _dataLive:HttpClient){}

  Old_result:any = [
    {Add_date1:'08-02-1998', Add_market1:'Inida Gate', Add_time1:"11:00", Add_value1:'12'},
  ]
  slider = {
    heading:'',
    pera:'',
    main_img:'',
  }

  getnoti(link:any){
    console.log(link);
  }

  ngOnInit(){
  this._dataLive.get(this.GetUrl).subscribe(res=>{
    console.log(res);
    // this.Old_result = res;

    this.Old_result = JSON.stringify(res);
    console.log(this.Old_result);
    this.Old_result = JSON.parse(this.Old_result);
    

  })

  }


}
