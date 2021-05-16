import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
 

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=42d28b3ef88b452c93817522b9e842a2"
  
  // Tech news
  technewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=42d28b3ef88b452c93817522b9e842a2"
  
  
  businessnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=42d28b3ef88b452c93817522b9e842a2"
  
  entertainnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=42d28b3ef88b452c93817522b9e842a2"
  
  healthnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=42d28b3ef88b452c93817522b9e842a2"
  
  sciencenewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=42d28b3ef88b452c93817522b9e842a2"
  
  sportsnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=42d28b3ef88b452c93817522b9e842a2"
   
  
    // 
    topheading():Observable<any>
    {
      return this._http.get(this.newsApiUrl)
    }
  
  techNews():Observable<any>
  {
    return this._http.get(this.technewsApiUrl)
  
  }
  
  
  businessNews():Observable<any>
  {
    return this._http.get(this.businessnewsApiUrl)
  }
  
  healthNews():Observable<any>
  {
    return this._http.get(this.healthnewsApiUrl)
  }
  
  
  scienceNews():Observable<any>
  {
    return this._http.get(this.sciencenewsApiUrl)
  }
  
  
  sportsNews():Observable<any>
  {
    return this._http.get(this.sportsnewsApiUrl)
  }
  
  
  entertainmentNews():Observable<any>
  {
    return this._http.get(this.entertainnewsApiUrl)
  }
  
  
  }
  
