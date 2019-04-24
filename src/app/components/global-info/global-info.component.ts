import { Component, OnInit} from '@angular/core';
import {DataService, PerformanceGroup} from '../../services/data-service.service';
import {Performance} from '../../models/Performance';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-global-info',
  templateUrl: './global-info.component.html',
  styleUrls: ['./global-info.component.css']
})
export class GlobalInfoComponent implements OnInit {

  globalTopPerformances$: Observable<PerformanceGroup>;
  globalTopPerformances: PerformanceGroup;

  constructor(private  dataService: DataService) { }

  ngOnInit() {
    this.globalTopPerformances$ = this.dataService.getGlobalTopPerformances();
  }
}
