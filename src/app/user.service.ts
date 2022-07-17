import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  adduser(data:any){
    return this.http.post('api/adduser' , {data:data})
  }

  loginuser(data:any){
    return this.http.post<any>('api/login' , {data:data})
  }

  logedIn(){
    return !!localStorage.getItem("token")
  }

  gettoken(){
    return localStorage.getItem("token")
  }
  
}




