import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckerService {
  private _age: number = 0;

  constructor() { }

  public isValidNumber(a: any): boolean {
    return a !== null && a !== undefined && !isNaN(a);
  }

  get age(){
    return this._age; 
  }
  set Age(value: number){
    this._age = value;
  }
}
