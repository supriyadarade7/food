import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct}  from '../IProduct';
import { INonvegdish } from '../../inonvegdish';
import { ISouthdish } from '../../isouthdish';
import { Ivegdeish } from '../../ivegdeish';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http:HttpClient) {  }
  
   getData():Observable<IProduct[]>{
  let url="http://localhost:3000/food";
  return this.http.get<IProduct[]>(url);

   }
  getData1():Observable<INonvegdish[]>{
    let url="http://localhost:3000/food";
    return this.http.get<INonvegdish[]>(url);

  }

  getData2():Observable<Ivegdeish[]>{
    let url="http://localhost:3000/food";
    return this.http.get<Ivegdeish[]>(url);

  }

  getData3():Observable<ISouthdish[]>{
    let url="http://localhost:3000/food";
    return this.http.get<ISouthdish[]>(url);

  }
   
         
}

