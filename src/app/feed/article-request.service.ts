import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleRequestService {

  constructor(private http: HttpClient) { }

  requestGet(url, params){
    return this.http.get(url, params) //separated this request just for convenience, i really dont know if this has much practical use at this point
  }

}
