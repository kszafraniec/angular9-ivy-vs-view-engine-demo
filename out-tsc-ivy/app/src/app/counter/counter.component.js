import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fontHeight } from './styles';
import * as i0 from '@angular/core';
import * as i1 from '../services/logger.service';
import * as i2 from '@angular/common';
function CounterComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, 'button', 2);
    i0.ɵɵlistener(
      'click',
      function CounterComponent_button_3_Template_button_click_0_listener() {
        i0.ɵɵrestoreView(_r2);
        const ctx_r1 = i0.ɵɵnextContext();
        return ctx_r1.more();
      }
    );
    i0.ɵɵtext(1, 'I want more!');
    i0.ɵɵelementEnd();
  }
}
const _c0 = ['*'];
export class CounterComponent {
  constructor(logger) {
    this.logger = logger;
    this.wantMore = new EventEmitter();
  }
  ngOnInit() {}
  more() {
    this.wantMore.emit();
    this.logger.log('I want more!!!');
  }
}
CounterComponent.ɵfac = function CounterComponent_Factory(t) {
  return new (t || CounterComponent)(i0.ɵɵdirectiveInject(i1.LoggerService));
};
CounterComponent.ɵcmp = i0.ɵɵdefineComponent({
  type: CounterComponent,
  selectors: [['app-counter']],
  inputs: { value: 'value', disable: 'disable', foo: 'foo' },
  outputs: { wantMore: 'wantMore' },
  ngContentSelectors: _c0,
  decls: 4,
  vars: 2,
  consts: [
    [1, 'value'],
    [3, 'click', 4, 'ngIf'],
    [3, 'click']
  ],
  template: function CounterComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵprojectionDef();
      i0.ɵɵelementStart(0, 'div', 0);
      i0.ɵɵtext(1);
      i0.ɵɵelementEnd();
      i0.ɵɵprojection(2);
      i0.ɵɵtemplate(3, CounterComponent_button_3_Template, 2, 0, 'button', 1);
    }
    if (rf & 2) {
      i0.ɵɵadvance(1);
      i0.ɵɵtextInterpolate(ctx.value);
      i0.ɵɵadvance(2);
      i0.ɵɵproperty('ngIf', !ctx.disable);
    }
  },
  directives: [i2.NgIf],
  styles: [
    '[_nghost-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n\n      .value[_ngcontent-%COMP%] {\n        font-size: 25px;\n      }'
  ]
});
/*@__PURE__*/ (function() {
  i0.ɵsetClassMetadata(
    CounterComponent,
    [
      {
        type: Component,
        args: [
          {
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
          }
        ]
      }
    ],
    function() {
      return [{ type: i1.LoggerService }];
    },
    {
      value: [
        {
          type: Input
        }
      ],
      disable: [
        {
          type: Input
        }
      ],
      foo: [
        {
          type: Input
        }
      ],
      wantMore: [
        {
          type: Output
        }
      ]
    }
  );
})();
//# sourceMappingURL=counter.component.js.map
