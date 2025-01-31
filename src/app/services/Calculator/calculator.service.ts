import { Injectable } from '@angular/core';
import { LoggerService } from '../Logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {


  constructor(private loggerService:LoggerService) { }

  add(n1: number, n2: number) {

    let result = n1 + n2;
    this.loggerService.log('Addition of ' + n1 + ' and ' + n2 + ' is ' + result);
    return result;
  }

  subtract(n1: number, n2: number) {

    let result = n1 - n2;
    this.loggerService.log('Subtraction of ' + n1 + ' and ' + n2 + ' is ' + result);
    return result;
  }
}
