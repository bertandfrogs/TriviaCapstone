import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Data} from './data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private testUrl = "https://opentdb.com/api.php?amount=10";
  constructor(private httpClient: HttpClient) { }

  getData(): Observable<Data>{
    return this.httpClient.get<Data>(this.testUrl, {});
  }

  //category goes from category=9 to category=32


}
