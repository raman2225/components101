import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  constructor() { }

  cars=[
    'G','D','R'
  ];

  myData(){
    return 'This is my data';
  }

}
