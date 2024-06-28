import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  messages: string[] = [];

  constructor() {

    debugger;
    //logic here
  }

  log(message: string) {
    debugger;
    this.messages.push(message);
  }
}
