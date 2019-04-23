import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { DataService } from './data-service.service';
import { Performance } from '../models/Performance';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const globalInfo = {
      data : {
        globalTopPerformanceCountries: [
          {performance: 82, name: 'US'},
          {performance: 89, name: 'UK'}
        ],
        globalWorstPerformanceCountries: [
          {performance: 82, name: 'US'},
          {performance: 89, name: 'UK'}
        ],
        globalTopPerformanceWords: [
          {performance: 82, name: 'US'},
          {performance: 89, name: 'UK'}
        ],
        globalWorstPerformanceWords: [
          {performance: 82, name: 'US'},
          {performance: 89, name: 'UK'}
        ]
      }
    };
    const expectedValue = {
      data : {
        globalTopPerformanceCountries: [
          new Performance('US', 82), new Performance('UK', 89)
        ],
        globalWorstPerformanceCountries: [
          new Performance('US', 82), new Performance('UK', 89)
        ],
        globalTopPerformanceWords: [
          new Performance('US', 82), new Performance('UK', 89)
        ],
        globalWorstPerformanceWords: [
          new Performance('US', 82), new Performance('UK', 89)
        ]
      }
    };
    const performance = {
      data: [
        {name: 'US', performance: 88},
        {name: 'UK', performance: 82}
      ]
    };
    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    const svc = new DataService(httpClientSpy);
    httpClientSpy.get.withArgs("api/globalInfo").and.returnValue(of(globalInfo));
    svc.getGlobalTopPerformances()
      .subscribe(
        (data) => {
          console.log(data);
          expect(data).toEqual(globalInfo);
        }
    );
    // httpClientSpy.get.withArgs("api/performance").and.returnValue(of(performance));
    // svc.getPerformancesByKeyword("")
    //   .subscribe(
    //     (data) => {
    //       console.log(data);
    //       expect(data).toEqual(expectedValue);
    //     }
    //   );
  });
});
