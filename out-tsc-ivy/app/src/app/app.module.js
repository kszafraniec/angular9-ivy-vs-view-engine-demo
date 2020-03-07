import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { LoggerService } from './services/logger.service';
import * as i0 from '@angular/core';
export class AppModule {}
AppModule.ɵmod = i0.ɵɵdefineNgModule({
  type: AppModule,
  bootstrap: [AppComponent]
});
AppModule.ɵinj = i0.ɵɵdefineInjector({
  factory: function AppModule_Factory(t) {
    return new (t || AppModule)();
  },
  providers: [LoggerService],
  imports: [[BrowserModule]]
});
(function() {
  (typeof ngJitMode === 'undefined' || ngJitMode) &&
    i0.ɵɵsetNgModuleScope(AppModule, {
      declarations: [AppComponent, CounterComponent],
      imports: [BrowserModule]
    });
})();
/*@__PURE__*/ (function() {
  i0.ɵsetClassMetadata(
    AppModule,
    [
      {
        type: NgModule,
        args: [
          {
            declarations: [AppComponent, CounterComponent],
            imports: [BrowserModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [LoggerService],
            bootstrap: [AppComponent]
          }
        ]
      }
    ],
    null,
    null
  );
})();
//# sourceMappingURL=app.module.js.map
