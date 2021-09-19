import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IMedia} from "./media.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestDataSourceService {

  constructor(private http: HttpClient) { }
  public getAllMedia(): Observable<{results:IMedia[], totalResults: 'string'}>{
   return this.http.get<{results:IMedia[], totalResults: 'string'}>('../../assets/mock/angular_Response.json')
  }

}
