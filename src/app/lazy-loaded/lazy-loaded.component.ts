import { Component, Inject, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-lazy-loaded',
  templateUrl: './lazy-loaded.component.html',
  styleUrls: ['./lazy-loaded.component.css']
})
export class LazyLoadedComponent implements OnInit {
  constructor(
    @Inject('API_TOKEN') public token: string,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.logger.log('Loaded lazy component');
  }
}
