/**
 * Created by darren on 4/12/19.
 */
export class CountryPerformance {
  name: string;
  performance: number;
  constructor(name: string, performance: number) {
    this.name = name;
    this.performance = performance;
  }
  toArray(): Array<string|number> {
    return [this.name, this.performance];
  }
}
