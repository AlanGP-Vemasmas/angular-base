import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>
      Counter: {{ counter }}
    </h3>

    <button (click)="increment(1)">+1</button>
    <button (click)="resect()">Reset</button>
    <button (click)="increment(-1)">-1</button>
    `
})
export class CounterComponent {

  public counter: number = 10;

  increment(value: number): void {
    this.counter += value;
  }

  resect(): void {
    this.counter = 10;
  }

}
