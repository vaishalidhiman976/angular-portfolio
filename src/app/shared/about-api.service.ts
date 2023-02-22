import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AboutApiService {

  constructor( private http: HttpClient) { }
   
  getAbout(){
  return this.http.get<any>('http://localhost:3000/about')
  .pipe(map((res:any)=>{
    return res;
  }))
  }

  postAbout(data:any){
    return this.http.post<any>('http://localhost:3000/about',data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateAbout(data:any, id:number){
    return this.http.put<any>('http://localhost:3000/about/'+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
 
  deleteAbout(id:any){
    return this.http.delete<any>('http://localhost:3000/about/'+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  } 

}
