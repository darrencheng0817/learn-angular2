import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {CountryPerformances} from '../models/CountryPerformances';
import {CountryPerformance} from '../models/CountryPerformance';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  fakeData: CountryPerformances = new CountryPerformances(
    [
      new CountryPerformance('Germany', 200),
      new CountryPerformance('United States', 300),
      new CountryPerformance('Brazil', 400),
      new CountryPerformance('Canada', 500),
      new CountryPerformance('France', 600),
      new CountryPerformance('RU', 700)
    ],
    [new CountryPerformance('AAA', 88), new CountryPerformance('BBB', 85), new CountryPerformance('CCC', 76)],
    [new CountryPerformance('AAA', 88), new  CountryPerformance('BBB', 85), new CountryPerformance('CCC', 76)]
  );

  data: Data = {
    football: this.fakeData
  };
  constructor() { }

  getGlobalTopPerformances(): Observable<Array<CountryPerformance>> {
    return of([new CountryPerformance('US', 88),
      new CountryPerformance('UK', 88),
      new CountryPerformance('China', 88)]);
  }


  getPerformances(keyword: string): Observable<CountryPerformances> {
    return of(this.data[keyword]);
  }
}

interface Data {
  [key: string]: CountryPerformances;
}
