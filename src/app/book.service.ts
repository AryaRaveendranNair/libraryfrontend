import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getbooks(){
    return this.http.get("api/books")
  }


  addbook(data:any){
    return this.http.post('api/add' , {data:data})
  }

  deletedata(id:any){
    return  this.http.delete("api/delete/"+id)
  
  }
  getbookdata(id:any){
    return  this.http.get('api/'+id)
  
  }
  
  updatebook(data:any){
    return  this.http.put('api/update' , data)
    
  }
  

}
