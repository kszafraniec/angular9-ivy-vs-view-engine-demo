import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { fontHeight } from './styles';

export function HOC() {
  return cmpType => {
    console.log('ɵcmp', cmpType.ɵcmp);
    console.log('ɵfac', cmpType.ɵfac);

    const originalFactory = cmpType.ɵfac;
    cmpType.ɵfac = (...args) => {
      const componentInstance = new originalFactory(...args);

      componentInstance.hocAddedValue = 'HOC added value!';

      return componentInstance;
    };

    return cmpType;
  };
}

@HOC()
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

  ngOnInit(): void {
    console.log('HIDDEN HOC VALUE:', (this as any).hocAddedValue);
  }

  more() {
    this.wantMore.emit();
    this.logger.log('I want more!!!');
  }
}
