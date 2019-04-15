import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor() { }

  getGlobalTopPerformances() {
    return [['US', 88], ['UK', 85], ['China', 76]];
  }
}
