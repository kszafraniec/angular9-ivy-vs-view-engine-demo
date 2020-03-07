import { Component, Inject } from '@angular/core';
import * as i0 from '@angular/core';
export class LazyLoadedComponent {
  constructor(ddd) {
    this.ddd = ddd;
  }
  ngOnInit() {
    console.log('ddd', this.ddd);
    //this.logger.log('Loaded lazy component');
  }
}
LazyLoadedComponent.ɵfac = function LazyLoadedComponent_Factory(t) {
  return new (t || LazyLoadedComponent)(i0.ɵɵdirectiveInject('ddd'));
};
LazyLoadedComponent.ɵcmp = i0.ɵɵdefineComponent({
  type: LazyLoadedComponent,
  selectors: [['app-lazy-loaded']],
  decls: 2,
  vars: 0,
  template: function LazyLoadedComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.ɵɵelementStart(0, 'p');
      i0.ɵɵtext(1, 'lazy-loaded works!');
      i0.ɵɵelementEnd();
    }
  },
  styles: ['']
});
/*@__PURE__*/ (function() {
  i0.ɵsetClassMetadata(
    LazyLoadedComponent,
    [
      {
        type: Component,
        args: [
          {
            selector: 'app-lazy-loaded',
            templateUrl: './lazy-loaded.component.html',
            styleUrls: ['./lazy-loaded.component.css']
          }
        ]
      }
    ],
    function() {
      return [
        {
          type: undefined,
          decorators: [
            {
              type: Inject,
              args: ['ddd']
            }
          ]
        }
      ];
    },
    null
  );
})();
//# sourceMappingURL=lazy-loaded.component.js.map
