import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { IAllData } from '../app.component';


@Injectable()
export class ConfigService {
  
    constructor(private http: HttpClient) { }

    public getAllStudentsLocalHost() : Observable<IAllData>{
        // now returns an Observable of Config

        const headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type'
          }
          
          const requestOptions = {                                                                                                                                                                                 
            headers: new HttpHeaders(headerDict), 
          };


        return this.http.get<IAllData>(`http://localhost:8080/v1/backoffice/students`,requestOptions);
    }



    public getAllStudents() : Observable<IAllData>{
      // now returns an Observable of Config

      const headerDict = {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
        
        const requestOptions = {                                                                                                                                                                                 
          headers: new HttpHeaders(headerDict), 
        };


      return this.http.get<IAllData>(`http://174.129.83.196:8080/v1/backoffice/students`,requestOptions);
  }

}
