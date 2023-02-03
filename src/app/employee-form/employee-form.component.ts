import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import{FormControl,FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  constructor(private dataService:ServiceService,private router:Router){}
  // 'empform':FormGroup;
data:any
index:any

empform=new FormGroup({
  firstname:new FormControl('',
  [Validators.required]),
  lastname:new FormControl('',
  [Validators.required]),
  city:new FormControl('',
  [Validators.required]),
  phonenumber:new FormControl('',
  [Validators.required])
});
message:any
message1:any
message2:any
message3:any
ngOnInit(): void {

  this.dataService.bsubject.subscribe(d=>{
    // console.log(d)
   this.data=d
   this.index=d.ID
  })
  if(this.data!=undefined){
    this.empform.patchValue({ 
      firstname:this.data.FirstName,
      lastname:this.data.LastName,
      city:this.data.City,
      phonenumber:this.data.phonenumber
    })}
}

get firstname() { 
  return this.empform.get('firstname'); }
get lastname(){return this.empform.get('lastname');}
get city(){return this.empform.get('city');}
get phonenumber(){return this.empform.get('phonenumber');}


  submitForm(){
    if(this.empform.valid){
    
      if(this.index===undefined){
      this.dataService.sendData(this.empform.value).subscribe(()=>{
      })
      this.empform.reset();
      this.router.navigate(['/emp-list'])
      this.dataService.route(true)
    }
    else{
      this.dataService.updateData(this.empform.value,this.index).subscribe(()=>{
      this.router.navigate(['/emp-list'])
      this.dataService.route(true)
      })
    }
  }
  // console.log(this.empform.value.firstname)
    if(this.empform.value.firstname===undefined){
      this. message='empty'
    }
    if(this.empform.value.lastname===undefined){
      this. message1='empty'
    }
    if(this.empform.value.city===undefined){
      this. message2='empty'
    }
    if(this.empform.value.phonenumber===undefined){
      this. message3='empty'
    }
  
     
  }

}
