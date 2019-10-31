import { Injectable } from '@angular/core';
import * as persons from './persons.json';
//import {ApiResponse} from '../model/api.model';

@Injectable({
  providedIn: 'root'
})
export class PersonsApiAdapterService {

  constructor() { }
  //getPersons(): ApiResponse {
   // return (persons as any).default;
  //}
}
