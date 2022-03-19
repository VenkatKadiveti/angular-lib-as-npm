import { Component, OnInit } from '@angular/core';
import { Venkatkadiveti248libService } from '../../venkatkadiveti248lib.service';

@Component({
  selector: 'lib-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  expressionStr: any = '';
  result= 0;
  constructor(public service: Venkatkadiveti248libService) { }

  ngOnInit() {
  }

  equation(data) {
    
    this.expressionStr += data;
  }

  eval () {
    this.result = eval(this.expressionStr);
    this.service.emit({operation: 'calc', result: this.result});
  }
}
