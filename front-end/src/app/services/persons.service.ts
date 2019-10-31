import { Injectable } from '@angular/core';
import { Person } from '../model/api.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PersonsService {

  private _url: string ='https://api.myjson.com/bins/p11r0';
  constructor(
   private http: HttpClient) {}

    getPersons(): Observable<Person[]> {
      return this.http.get<Person[]>(this._url);
    }
}
