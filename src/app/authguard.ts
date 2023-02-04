import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { ServiceService } from "./service.service";
@Injectable({
    providedIn:'root'
})

export class testCanActivate implements CanActivate{
    constructor(private dataService:ServiceService, private _router: Router){}
    auth:any
    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean {
        console.log(localStorage.getItem('boolValue'))
        if(localStorage.getItem('boolValue')==='null' || localStorage.getItem('boolValue')===null ){
            this._router.navigate(['/login'])
            return false;
        }
        else {
           return true;
        }
       
    }

}