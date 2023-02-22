import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http: HttpClient) { }
  
postData(data: any){
  return this.http.post<any>('http://localhost:3000/products',data)
  .pipe(map((res:any)=>{
    return res;
  }))
}

getData(){
  return this.http.get<any>('http://localhost:3000/products')
  .pipe(map((res:any)=>{
    return res;
  }))
}

deleteData(id: number){
  return this.http.delete<any>('http://localhost:3000/products/'+id)
  .pipe(map((res:any)=>{
    return res;
  }))
}

updateData(data: any,  id: number){
  return this.http.put<any>('http://localhost:3000/products/'+id,data)
  .pipe(map((res:any)=>{
    return res;
  }))
}

}
