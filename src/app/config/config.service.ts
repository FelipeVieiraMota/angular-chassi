import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { IAllData } from '../app.component';


@Injectable()
export class ConfigService {
  
    constructor(private http: HttpClient) { }

    public getAllStudents() : Observable<IAllData>{
        // now returns an Observable of Config

        var proxyForLocalHost:string = 'https://cors-anywhere.herokuapp.com/'

        const headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type'
          }
          
          const requestOptions = {                                                                                                                                                                                 
            headers: new HttpHeaders(headerDict), 
          };


        return this.http.get<IAllData>(`${proxyForLocalHost}http://54.174.89.104:8080/v1/backoffice/students`,requestOptions);
    }

}
