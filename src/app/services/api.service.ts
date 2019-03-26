import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Data} from './data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private testUrl = "https://opentdb.com/api.php?amount=10";
  url: string;

  constructor(private httpClient: HttpClient) { }

  setData(url){
    console.log("this is the api service");
    this.url = url;
    console.log(this.url);
  }

  getData(): Observable<Data>{
    return this.httpClient.get<Data>(this.url, {});
  }

  //category goes from category=9 to category=32


}
