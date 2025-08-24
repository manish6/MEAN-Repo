import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('http://localhost:3000/hi');
  }

  getproducts(): Observable<any> {
    return this.http.get('http://localhost:3000/products');
  }
}
