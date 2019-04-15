import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor() { }

  getGlobalTopPerformances(): Observable<Array<any>> {
    return of([['US', 88], ['UK', 85], ['China', 76]]);
  }
}
