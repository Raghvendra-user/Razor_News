import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import {HttpClientModule} from '@angular/common/http';
import {NewsapiservicesService} from './service/newsapiservices.service';
import { TechnewsComponent } from './technews/technews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import {BusinessnewsComponent} from './businessnews/businessnews.component'
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { SciencenewsComponent } from './sciencenews/sciencenews.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';
 
@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    HealthnewsComponent,
    BusinessnewsComponent,
    SportsnewsComponent,
    SciencenewsComponent,
    EntertainmentnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
