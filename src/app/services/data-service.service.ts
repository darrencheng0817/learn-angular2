import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {CountryPerformance} from '../models/CountryPerformance';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  fakeData: CountryPerformance = {
    allCountries : [
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ],
    best : [['AAA', 88], ['BBB', 85], ['CCC', 76]],
    worst : [['CCC', 88], ['BBB', 85], ['AAA', 76]]
  };

  data: Data = {
    football: this.fakeData
  };
  constructor() { }

  getGlobalTopPerformances(): Observable<Array<any>> {
    return of([['US', 88], ['UK', 85], ['China', 76]]);
  }


  getPerformances(keyword: string): Observable<CountryPerformance> {
    return of(this.data[keyword]);
  }
}

interface Data {
  [key: string]: CountryPerformance;
}
