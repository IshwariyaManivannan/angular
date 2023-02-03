import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { ServiceService } from "./service.service";
@Injectable({
    providedIn:'root'
})

export class testCanActivate implements CanActivate{
    constructor(private dataService:ServiceService){}
    auth:any
    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean {
        console.log(localStorage.getItem('boolValue'))
        if(localStorage.getItem('boolValue')==='null'){
            return false;
        }
        else {
        //    localStorage.setItem('boolValue','false')
           
        //    localStorage.clear()
           return true;
        }
       
    }

}