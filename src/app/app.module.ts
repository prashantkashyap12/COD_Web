import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { Market1Component } from './market1/market1.component';
import { Market2Component } from './market2/market2.component';
import { Market3Component } from './market3/market3.component';
import { Market4Component } from './market4/market4.component';
import { Market5Component } from './market5/market5.component';
import { Market6Component } from './market6/market6.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { NavbarWebComponent } from './navbar-web/navbar-web.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { WebFooterComponent } from './web-footer/web-footer.component';
import { WebOldResultComponent } from './web-old-result/web-old-result.component';
import { SelectorComponent } from './selector/selector.component';


@NgModule({
  declarations: [
    AppComponent,
    Market1Component,
    Market2Component,
    Market3Component,
    Market4Component,
    Market5Component,
    Market6Component,
    HowToPlayComponent,
    NavbarWebComponent,
    TopHeaderComponent,
    MainSliderComponent,
    WebFooterComponent,
    WebOldResultComponent,
    SelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    NgbModule,
    HttpClientModule,
    FormsModule,
    // AngularFontAwesomeModule
  ],
  providers: [],
  exports:[
    AppComponent,
    Market1Component,
    Market2Component,
    Market3Component,
    Market4Component,
    Market5Component,
    Market6Component,
    HowToPlayComponent,
    NavbarWebComponent,
    TopHeaderComponent,
    MainSliderComponent,
    WebFooterComponent,
    WebOldResultComponent,
    SelectorComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
