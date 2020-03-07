import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { LoggerService } from './services/logger.service';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
