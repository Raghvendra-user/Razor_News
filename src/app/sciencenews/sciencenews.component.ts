import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service'

@Component({
  selector: 'app-sciencenews',
  templateUrl: './sciencenews.component.html',
  styleUrls: ['./sciencenews.component.css']
})
export class SciencenewsComponent implements OnInit {

  constructor(private _service:NewsapiservicesService) { }
  sciencenewsDisplay:any=[];

  ngOnInit(): void {
    this._service.scienceNews().subscribe((result)=>{
      this.sciencenewsDisplay=result.articles;
  })

}
}
