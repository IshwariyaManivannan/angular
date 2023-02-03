import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  constructor(private dataService: ServiceService, private router: Router) { }
  // 'signinForm':FormGroup
  'fieldTextType': boolean;
  ngOnInit() {

  }
  signinForm = new FormGroup({
    mail: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [
      Validators.required])
  })
  get mail() { return this.signinForm.get('mail'); }
  get password() { return this.signinForm.get('password') }
  message: any
  mailId: any
  login() {
    this.dataService.checkMail(this.signinForm.value).subscribe((d) => {
      this.message = d.message

      if (this.message === 'Logged in') {
        this.mailId = this.signinForm.value.mail
        localStorage.setItem('boolValue', 'true')
        localStorage.setItem('email', this.mailId)
        this.router.navigate(['/emp-form'])
      }
    })
  }
 reset(){
  this.router.navigate(['/reset'])
 }
 toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;
}


}
