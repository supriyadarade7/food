import { Injectable } from '@angular/core';
import { IProduct } from './iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getData():Observable<IProduct[]>{

    let url="http://localhost:3000/food";
         
        //  console.log("in service");
    
        return this.http.get<IProduct[]>(url);
    
      }
}
