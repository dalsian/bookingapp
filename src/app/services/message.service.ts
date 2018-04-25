import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }

  //Subscribed by header component to detect login event
  loginTriggered = new EventEmitter();
  emitLoginTriggered(msg: string) {
    this.loginTriggered.emit(msg);
  }

  //Other event messages here...
  //...
}
