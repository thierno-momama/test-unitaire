import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CheckerService } from './shared/services/checker/checker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coulisse-learn-test-unitaire';
  public age: number = 1;

  constructor(private fb: FormBuilder, private checkerService: CheckerService){}

  public get name(){
    return "Coulisse learn";
  }

  public changeAge(): void {
    this.age = 12;
  }

  public calc(a: number, b: number): number {
    if(this.checkerService.isValidNumber(a)){
      const age = this.checkerService.age;
      return this.multiply(a, b);
    }
    throw new Error('Sorry it is not a valid number');
  }

  private multiply(a: number, b: number): number {
    return a*b;
  }

  

}
