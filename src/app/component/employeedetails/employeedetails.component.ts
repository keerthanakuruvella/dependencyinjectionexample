import { Component, OnInit } from '@angular/core';
import { RecordservicesService } from '../recordservices.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.scss'],
  providers: [RecordservicesService]
})
export class EmployeedetailsComponent implements OnInit {

  empinfo1: string[] = [];
  empinfo2: string[] = [];
  empinfo3: string[] = [];

  getempinfofromservices1() {
    this.empinfo1 = this.rservices.getinfoservices1();
  }
  getempinfofromservices2() {
    this.empinfo2 = this.rservices.getinfoservices2();
  }
  getempinfofromservices3() {
    this.empinfo3 = this.rservices.getinfoservices3();
  }

  constructor(private rservices: RecordservicesService) {

  }
  ngOnInit(): void {

  }
}
