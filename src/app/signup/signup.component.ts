import { Component, OnInit } from '@angular/core';
import{ FormControl,FormGroup, Validators} from '@angular/forms'
import { ServiceService } from '../service.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
 
  constructor(private dataService:ServiceService,private router:Router){}
// 'signupform':FormGroup
ngOnInit(): void {
  
}

// 'loggedIn':true
message:any
message1:any
error:any
signup(){
      
  if(this.signupform.valid){
    this.dataService.signupData(this.signupform.value).subscribe((d)=>{
      this.message1=d.message
     
      if(this.message1==='invalid'){
        
        this.signupform.reset();
      }else{
        this.signupform.reset();
        this.dataService.route(true)
        this.router.navigate(['/otp-verify'])
      }
    
    })
  }
  if(this.signupform.value.email===''){
     this.message='emailEmpty'
  }
  
  if(this.signupform.value.password===''){
    this.error='passwordEmpty'
  }
  

}

  get email() { 
     return this.signupform.get('email'); }
 get password(){return this.signupform.get('password');}
  
  
  signupform=new FormGroup({
    email:new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password:new FormControl('',[Validators.required])
    });

  
 
   cancel(){
    this.signupform.reset();
   }
   hide : boolean = true;

   myFunction() {
  this.hide = !this.hide;
}
  
}
