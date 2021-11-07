import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordservicesService {

  constructor() { }
  info1: string[] = ["keerthana", 'e237', 'ks@gmail.com'];
  info2: string[] = ["kuruvella", 'e887', 'kp@gmail.com'];
  info3: string[] = ["Anvika", 'e987', 'ap@gmail.com'];

  getinfoservices1() {
    return this.info1;
  }
  getinfoservices2() {
    return this.info2;
  }
  getinfoservices3() {
    return this.info3;
  }
}
