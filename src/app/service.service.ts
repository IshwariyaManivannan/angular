import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{BehaviorSubject} from 'rxjs';
import { Route } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ServiceService implements OnInit{

  ngOnInit(): void {
 
  }

constructor(private http:HttpClient){}
public bsubject =new BehaviorSubject<any>({});
// public Bsubject=new BehaviorSubject<boolean>(false)
route(data:any){
  console.log(typeof(data))
  // this.Bsubject.next(data)
  
}
sendData(data:any){
  return this.http.post<any>('http://localhost:3000/create',data);
}

getData(){
  return this.http.get<any>('http://localhost:3000/get')
}
deleteData(data:any){
  return this.http.post<any>('http://localhost:3000/deleteData',data);
}
updateData(data:any,id:any){
let dataU={
  id:id,
  body:data
}
 return this.http.put<any>('http://localhost:3000/update',dataU)
}
signupData(data:any){
  // console.log(data)
  
  localStorage.setItem('mail',data.email)
  return this.http.post<any>('http://localhost:3000/saveData',data)
}
sendOtp(value:any){
  // console.log(value)
  let mail=localStorage.getItem('mail')
  let data={
    value:value,
    mail:mail
  }
  return this.http.post<any>('http://localhost:3000/sendOtp',data)
}
checkMail(value:any){
   return this.http.post<any>('http://localhost:3000/login',value)
}
reset(){
  return 
}
}
