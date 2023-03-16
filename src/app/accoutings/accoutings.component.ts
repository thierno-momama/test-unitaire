import { Component } from '@angular/core';
import { AccountingService } from '../shared/services/accounting/accounting.service';

@Component({
  selector: 'app-accoutings',
  templateUrl: './accoutings.component.html',
  styleUrls: ['./accoutings.component.css']
})
export class AccoutingsComponent {


  constructor(private accountingService: AccountingService){}
}
