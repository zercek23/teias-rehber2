import { Injectable } from '@angular/core';
import { DATA, Kullanici } from '../common/data';
import {Observable, of} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000'

  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<Kullanici[]> {
    const data = of(DATA);
    return data
  }
}
