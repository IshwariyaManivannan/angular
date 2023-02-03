import { Component } from '@angular/core';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.scss']
})
export class OtpVerifyComponent {
  constructor(private dataService:ServiceService,private router:Router){}
  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 4,
    autofocus: true,
    classList: {
      inputBox: 'my-super-box-class',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class',
    },
  };

  handeOtpChange(value: string[]): void {
    console.log(value);
  }
  message:any
  handleFillEvent(value: string) {
    console.log(value);
    this.dataService.sendOtp(value).subscribe((d)=>{
      this.message=d.message
      console.log(this.message)
      if(this.message==='verified'){
        // this.dataService.route(true)
        this.router.navigate([''])
        // console.log('hi')
      } else if (this.message=== 'invalid') {
        console.log("Wrong otp");
      }
     })
  }
}
