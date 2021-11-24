import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  //private token = 'oJFw5E8cL_2a1OQiz3Ah'

  private API_SERVER="https://the-one-api.dev/v2/book"

  constructor(private http: HttpClient) {
    
   }

  public getAllBooks(): Observable<any> {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer oJFw5E8cL_2a1OQiz3Ah'
    })
    
    return this.http.get<any>(this.API_SERVER, { headers : headers_object})
  }

  public getAllChapBooks(id : string): Observable<any> {

    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer oJFw5E8cL_2a1OQiz3Ah'
    })
    
    return this.http.get<any>(this.API_SERVER+"/"+id+"/chapter", { headers : headers_object})
  }


}
