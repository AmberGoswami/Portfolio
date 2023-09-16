import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "http://127.0.0.1:8000"
  constructor(private http: HttpClient) { }
  postData(file: any) {
    return this.http.post(`${this.url}/submit`, file);
  }
}
