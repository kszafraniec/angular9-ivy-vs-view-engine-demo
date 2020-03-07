import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { fontHeight } from './styles';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .value {
        font-size: ${fontHeight}px;
      }
    `
  ]
})
export class CounterComponent implements OnInit {
  @Input() value: number;
  @Input() disable: boolean;
  @Input() foo: number;
  @Output() wantMore: EventEmitter<void> = new EventEmitter<void>();

  constructor(private logger: LoggerService) {}

  ngOnInit(): void {}

  more() {
    this.wantMore.emit();
    this.logger.log('I want more!!!');
  }
}
