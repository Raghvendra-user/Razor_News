import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import {TechnewsComponent} from './technews/technews.component';
import {HealthnewsComponent} from './healthnews/healthnews.component';
import {SportsnewsComponent} from './sportsnews/sportsnews.component';
import {BusinessnewsComponent} from './businessnews/businessnews.component';
import {SciencenewsComponent} from './sciencenews/sciencenews.component';
import {EntertainmentnewsComponent} from './entertainmentnews/entertainmentnews.component';


const routes: Routes = [
  {path:'',component:TopheadingComponent}, //home
  {path:'tech',component:TechnewsComponent}, //TechNews
  {path:'health',component:HealthnewsComponent},
  {path:'sports',component:SportsnewsComponent},
  {path:'science',component:SciencenewsComponent},
  {path:'entertain',component:EntertainmentnewsComponent},
  {path:'business',component:BusinessnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 