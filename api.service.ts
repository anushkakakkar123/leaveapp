import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import{Model} from './leaveapp/model'
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 url = 'http://10.0.0.147:8080/postData'
  constructor(private http: HttpClient) {}
  



//getLeaveRequests() {
 // return this.http.get(`this.url`);

//}


  submitLeave(data: any) {
    console.log(data);
    return this.http.post(`this.url`,data,{ responseType: 'text' })
    .pipe(
      map(
        (response) => {
          return JSON.parse(response);
        },
        (error: any) => {
          return error;
        }
        )
        )
    }  
  }      


  



