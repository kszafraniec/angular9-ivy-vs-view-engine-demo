import { Component, Injector, ɵrenderComponent } from '@angular/core';
import * as i0 from '@angular/core';
import * as i1 from './services/logger.service';
import * as i2 from './counter/counter.component';
export class AppComponent {
  constructor(loggerService, injector) {
    this.loggerService = loggerService;
    this.injector = injector;
    this.pizzaCount = 0;
    this.eatingStatus = '';
  }
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
  loadLazyComponent() {
    import('./lazy-loaded/lazy-loaded.component').then(
      ({ LazyLoadedComponent }) => {
        const injector = Injector.create({
          providers: [
            {
              provide: 'ddd',
              useValue: 'custominjector'
            }
          ]
        });
        ɵrenderComponent(LazyLoadedComponent, {
          host: 'lazy-host',
          injector
        });
      }
    );
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(
    i0.ɵɵdirectiveInject(i1.LoggerService),
    i0.ɵɵdirectiveInject(i0.Injector)
  );
};
AppComponent.ɵcmp = i0.ɵɵdefineComponent({
  type: AppComponent,
  selectors: [['app-root']],
  decls: 18,
  vars: 6,
  consts: [
    [1, 'counter'],
    [3, 'disabled', 'click'],
    [3, 'value', 'disable', 'foo', 'wantMore'],
    [1, 'eat'],
    [3, 'click']
  ],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵelementStart(0, 'h2');
      i0.ɵɵtext(1, 'Angular 9 Ivy vs View Engine demo app!');
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(2, 'div', 0);
      i0.ɵɵelementStart(3, 'button', 1);
      i0.ɵɵlistener(
        'click',
        function AppComponent_Template_button_click_3_listener() {
          return ctx.removePizza();
        }
      );
      i0.ɵɵtext(4, '-');
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(5, 'app-counter', 2);
      i0.ɵɵlistener(
        'wantMore',
        function AppComponent_Template_app_counter_wantMore_5_listener() {
          return ctx.more();
        }
      );
      i0.ɵɵelementStart(6, 'div');
      i0.ɵɵtext(7, 'pizzas');
      i0.ɵɵelementEnd();
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(8, 'button', 1);
      i0.ɵɵlistener(
        'click',
        function AppComponent_Template_button_click_8_listener() {
          return ctx.addPizza();
        }
      );
      i0.ɵɵtext(9, '+');
      i0.ɵɵelementEnd();
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(10, 'div', 3);
      i0.ɵɵelementStart(11, 'button', 4);
      i0.ɵɵlistener(
        'click',
        function AppComponent_Template_button_click_11_listener() {
          return ctx.eat();
        }
      );
      i0.ɵɵtext(12, 'EAT THEM ALL');
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(13, 'h3');
      i0.ɵɵtext(14);
      i0.ɵɵelementEnd();
      i0.ɵɵelementEnd();
      i0.ɵɵelementStart(15, 'button', 4);
      i0.ɵɵlistener(
        'click',
        function AppComponent_Template_button_click_15_listener() {
          return ctx.loadLazyComponent();
        }
      );
      i0.ɵɵtext(16, 'Load lazy component');
      i0.ɵɵelementEnd();
      i0.ɵɵelement(17, 'lazy-host');
    }
    if (rf & 2) {
      i0.ɵɵadvance(3);
      i0.ɵɵproperty('disabled', !!ctx.eatingStatus);
      i0.ɵɵadvance(2);
      i0.ɵɵproperty('value', ctx.pizzaCount)('disable', !!ctx.eatingStatus)(
        'foo',
        ctx.foo()
      );
      i0.ɵɵadvance(3);
      i0.ɵɵproperty('disabled', !!ctx.eatingStatus);
      i0.ɵɵadvance(6);
      i0.ɵɵtextInterpolate(ctx.eatingStatus);
    }
  },
  directives: [i2.CounterComponent],
  styles: [
    'button[_ngcontent-%COMP%] {\n  height: 40px;\n  font-size: 20px;\n}\n\n.counter[_ngcontent-%COMP%] {\n  width: 200px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.eat[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}'
  ]
});
/*@__PURE__*/ (function() {
  i0.ɵsetClassMetadata(
    AppComponent,
    [
      {
        type: Component,
        args: [
          {
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }
        ]
      }
    ],
    function() {
      return [{ type: i1.LoggerService }, { type: i0.Injector }];
    },
    null
  );
})();
//# sourceMappingURL=app.component.js.map
