/**
 * Created by darren on 4/22/19.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const globalInfo = {
      globalTopPerformanceCountries: [
        {performance: 11, name: 'Mr. Nice'},
        {performance: 12, name: 'Narco'},
        {performance: 13, name: 'Bombasto'}
      ],
      globalWorstPerformanceCountries: [
        {performance: 11, name: 'Mr. Nice'},
        {performance: 12, name: 'Narco'},
        {performance: 13, name: 'Bombasto'}
      ],
      globalTopPerformanceWords: [
        {performance: 11, name: 'Mr. Nice'},
        {performance: 12, name: 'Narco'},
        {performance: 13, name: 'Bombasto'}
      ],
      globalWorstPerformanceWords: [
        {performance: 11, name: 'Mr. Nice'},
        {performance: 12, name: 'Narco'},
        {performance: 13, name: 'Bombasto'}
      ]
    };
    const performance = {
      data: [
            {name: 'US', performance: 88},
            {name: 'UK', performance: 82}
          ]
    };
    return {globalInfo, performance};
  }
}
