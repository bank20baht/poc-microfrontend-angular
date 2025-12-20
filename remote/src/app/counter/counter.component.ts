import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'remote-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {

  @Input() title: string = 'Counter';
  @Output() countChange = new EventEmitter<number>();

  count = 0;

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }

  decrement() {
    this.count--;
    this.countChange.emit(this.count);
  }

}
