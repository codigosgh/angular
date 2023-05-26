import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:  `
  <h3>New Counter: {{counter}}</h3>
  <hr>
<button (click)="incrementar(+1)">+1</button>
<button  (click)="resetCounter()">Reset</button>
<button (click)="incrementar(-1)">-1</button>
  `
})

export class CounterComponent  {
  constructor() { }

  public counter: number=10;

  incrementar(value: number):void{
     this.counter+=value;
  }

  resetCounter(){
  this.counter = 10;
  }


}
