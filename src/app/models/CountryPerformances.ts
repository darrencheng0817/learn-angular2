/**
 * Created by darren on 4/12/19.
 */
import {CountryPerformance} from './CountryPerformance';

export class CountryPerformances {
  allCountries: CountryPerformance[] = [];
  best: CountryPerformance[] = [];
  worst: CountryPerformance[] = [];
  constructor(allCountries, best, worst) {
    this.allCountries = allCountries;
    this.best = best;
    this.worst = worst;
  }

  allCountriesToArray(): Array<Array<string|number>> {
    const res: Array<Array<string|number>> = [];
    this.allCountries.forEach(element => {
      res.push([element.name, element.performance]);
    });
    return res;
  }
}
