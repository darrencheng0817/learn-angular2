import { Component, OnInit} from '@angular/core';
import {DataService, PerformanceResponse} from '../../services/data-service.service';
import {Performance} from '../../models/Performance';

@Component({
  selector: 'app-global-info',
  templateUrl: './global-info.component.html',
  styleUrls: ['./global-info.component.css']
})
export class GlobalInfoComponent implements OnInit {

  globalTopPerformances: Array<Performance>;
  constructor(private  dataService: DataService) { }

  ngOnInit() {
    this.dataService.getGlobalTopPerformances()
      .subscribe(
        (data: PerformanceResponse) => {
          this.globalTopPerformances = data.globalTopPerformanceCountries;
        }, // success path
        error => console.log('error')
        // error path
      );
  }
}
