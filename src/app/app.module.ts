import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmpListComponent } from './emp-list/emp-list.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { HeaderComponent } from './header/header.component';
import { AuthtokenInterceptor } from './authtoken.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    EmployeeFormComponent,
    SigninComponent,
    EmpListComponent,
    OtpVerifyComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,ReactiveFormsModule,
    FormsModule,
    NgxOtpInputModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthtokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
