import { Injectable } from '@angular/core';
import { DATA, Kullanici } from '../common/data';
import {Observable, of} from 'rxjs'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { State } from '../components/table-filter/table-filter.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/users'

  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<Kullanici[]> {
    return this.http.get<Kullanici[]>(this.apiUrl)
  }

  getUsersWithQuery(kullanici: any): Observable<Kullanici[]> {
    return this.http.get<Kullanici[]>(this.apiUrl, { params: kullanici })
  }
}
