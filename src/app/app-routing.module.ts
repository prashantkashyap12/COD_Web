import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { Market1Component } from './market1/market1.component';
import { Market2Component } from './market2/market2.component';
import { Market3Component } from './market3/market3.component';
import { Market4Component } from './market4/market4.component';
import { Market5Component } from './market5/market5.component';
import { Market6Component } from './market6/market6.component';
import { NavbarWebComponent } from './navbar-web/navbar-web.component';
import { WebOldResultComponent } from './web-old-result/web-old-result.component';

const routes: Routes = [

  {path:'', redirectTo:"mainslider", pathMatch:'full'},
  {path:'mainslider', component:MainSliderComponent},
  {path:'howtoplay', component:HowToPlayComponent },
  {path: 'market1', component: Market1Component },
  {path: 'market2', component: Market2Component },
  {path: 'market3', component: Market3Component },
  {path: 'market4', component: Market4Component },
  {path: 'market5', component: Market5Component },
  {path: 'market6', component: Market6Component },
  {path: 'market6', component: NavbarWebComponent },
  {path: 'old_Result', component: WebOldResultComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
