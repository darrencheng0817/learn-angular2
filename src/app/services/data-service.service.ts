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

  getGlobalTopPerformances(): Observable<GlobalInfoResponse> {
    return this.http.get<GlobalInfoResponse>(this.globalInfoUrl);
      // .pipe(
      //   tap(_ => console.log(`fetched GlobalTopPerformances`)),
      //   catchError(this.handleError<PerformanceResponse>('getHeroes', []))
      // );
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
  getPerformancesByKeyword(keyword: string): Observable<PerformanceResponse> {
    const url = `${this.performanceUrl}`;
    const options = keyword ?
      { params: new HttpParams().set('keyword', keyword) } : {};

    return this.http.get<PerformanceResponse>(url, options);
    //   .pipe(
    //   tap(_ => console.log(`fetched hero id=${keyword}`)),
    //   catchError(this.handleError<CountryPerformances>(`getPerformances  keyword=${keyword}`))
    // );
  }
}

export interface GlobalInfoResponse {
  data: {
    [key: string]: Performance[]
  };
}

export interface PerformanceResponse {
  [key: string]: Performance[];
}
