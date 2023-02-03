import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { testCanActivate } from './authguard';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
{
  path:'app',
  component:AppComponent,
  // redirectTo: '/emp-list',
},
{
  path:'signup',
  component:SignupComponent
},
{
  path:'',
  component:SigninComponent,
  // canActivate:[testCanActivate]
},
{
  path:'emp-form',
  component:EmployeeFormComponent,
  canActivate:[testCanActivate]
},
{
 path:'emp-list',
 component:EmpListComponent,
 canActivate:[testCanActivate],
},

{
path:'otp-verify',
component:OtpVerifyComponent,
canActivate:[testCanActivate]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
