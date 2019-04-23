import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Performance} from '../models/Performance';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private globalInfoUrl = 'api/globalInfo';  // URL to web api
  private performanceUrl = 'api/performance';  // URL to web api
  constructor(private http: HttpClient) {}

  getGlobalTopPerformances(): Observable<PerformanceGroup> {
    return this.http.get<GlobalInfoResponse>(this.globalInfoUrl)
      .pipe(map(res => {
        const performanceGroup: PerformanceGroup = {};
        Object.keys(res.data).forEach(key => {
          performanceGroup[key] = [];
          res.data[key].forEach(element => {
            performanceGroup[key].push(new Performance(element.name, element.performance));
          });
        });

        return performanceGroup;
      }));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // getPerformancesByKeyword(keyword: string): Observable<CountryPerformances> {
  //   return of(this.data[keyword]);
  // }

  /** GET hero by id. Will 404 if id not found */
  getPerformancesByKeyword(keyword: string): Observable<Performance[]> {
    const url = `${this.performanceUrl}`;
    const options = keyword ?
      { params: new HttpParams().set('keyword', keyword) } : {};

    return this.http.get<PerformanceGroup>(url)
      .pipe(map(res => {
        const performances: Performance[] = [];
        res.data.forEach(element => {
          performances.push(new Performance(element.name, element.performance));
        });
        return performances;
      }));
  }
}

export interface GlobalInfoResponse {
  data: {
    [key: string]: Performance[]
  };
}

export interface PerformanceGroup {
  [key: string]: Performance[];
}
