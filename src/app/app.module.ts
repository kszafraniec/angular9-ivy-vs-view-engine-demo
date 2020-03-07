import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { LoggerService } from './services/logger.service';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule],
  providers: [
    LoggerService,
    {
      provide: 'API_TOKEN',
      useValue: '123456'
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
