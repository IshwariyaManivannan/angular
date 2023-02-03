import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit{

constructor(private dataService:ServiceService,private router: Router){}
data:any
receivedData:any
ngOnInit(): void {
  this.dataService.getData().subscribe((res)=>{
    // console.log(res.data)
    this.data=res.data
    this.receivedData=res.data
  })
}
edit(data:any){
  console.log(data)
this.dataService.bsubject.next(data)
this.router.navigate(['/emp-form'])
}
delete(index:any,dataD:any){

 this.receivedData.splice(index,1)
 this.dataService.deleteData(dataD).subscribe(()=>{

 })
}


}
