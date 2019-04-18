import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private keywordSu = new Subject<string>();  //
  messageObserve = this.keywordSu.asObservable();
  public setKeyword(keyword: string) {
    this.keywordSu.next(keyword);
  }
}
