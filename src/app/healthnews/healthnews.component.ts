import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service'
@Component({
  selector: 'app-healthnews',
  templateUrl: './healthnews.component.html',
  styleUrls: ['./healthnews.component.css']
})
export class HealthnewsComponent implements OnInit {

  constructor(private _service:NewsapiservicesService) { }
healthnewsDisplay:any=[];
  ngOnInit(): void {
    this._service.healthNews().subscribe((result)=>{
      this.healthnewsDisplay=result.articles;
    })
  }
  

}
