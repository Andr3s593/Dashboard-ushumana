import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarrasService {
  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get('http://localhost:4000/api/dashboard');
  }  
}
