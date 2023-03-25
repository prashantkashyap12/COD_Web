import { Component } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent {
  userstatus:any = true;
  status1 = "Live";
  status2 = "Offline"; 
  
  social = {
    facebook:'https://www.facebook.com/',
    insta:'https://www.instagram.com/',
    twitter:'https://twitter.com/',
    youtube:'https://www.youtube.com/'
  }

   dateLive = new Date();

}
