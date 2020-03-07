import { Injectable } from '@angular/core';
import * as i0 from '@angular/core';
export class LoggerService {
  constructor() {}
  log(...data) {
    console.log('LOG:', ...data);
  }
}
LoggerService.ɵfac = function LoggerService_Factory(t) {
  return new (t || LoggerService)();
};
LoggerService.ɵprov = i0.ɵɵdefineInjectable({
  token: LoggerService,
  factory: LoggerService.ɵfac
});
/*@__PURE__*/ (function() {
  i0.ɵsetClassMetadata(
    LoggerService,
    [
      {
        type: Injectable
      }
    ],
    function() {
      return [];
    },
    null
  );
})();
//# sourceMappingURL=logger.service.js.map
