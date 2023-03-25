import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-web-footer',
  templateUrl: './web-footer.component.html',
  styleUrls: ['./web-footer.component.css']
})
export class WebFooterComponent {

  mainfooter = {
    logo:'../assets/logo_main2.png'
  }
  datasub(subsEmail:FormsModule){
    console.warn(subsEmail);
  }
  

}
