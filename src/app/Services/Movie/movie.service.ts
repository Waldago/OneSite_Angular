import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private API_SERVER="https://the-one-api.dev/v2/Movie"

  constructor(private http: HttpClient) { }

  public getAllMovie() : Observable<any>{
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer oJFw5E8cL_2a1OQiz3Ah'
    })
    
    return this.http.get<any>(this.API_SERVER, { headers : headers_object})
  }
}
