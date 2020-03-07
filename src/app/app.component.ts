import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pizzaCount = 0;
  eatingStatus = '';

  constructor(private loggerService: LoggerService) {}

  addPizza() {
    this.pizzaCount = this.pizzaCount + 1;
    this.loggerService.log('Added pizza');
  }

  removePizza() {
    if (this.pizzaCount > 0) {
      this.pizzaCount = this.pizzaCount - 1;
      this.loggerService.log('Removed pizza');
    }
  }

  more() {
    this.pizzaCount = this.pizzaCount * 2;
    this.loggerService.log('Doubled pizzas');
  }

  foo() {
    return 2 + 2;
  }

  eat() {
    this.eatingStatus = 'Eating...';
    setTimeout(() => {
      this.pizzaCount = 0;
      this.eatingStatus = '';

      this.loggerService.log('All pizzas eaten!');
    }, 2000);
  }
}
