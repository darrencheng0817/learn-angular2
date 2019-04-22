import { Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data-service.service';
import {CountryPerformance} from '../../models/CountryPerformance';

@Component({
  selector: 'app-global-info',
  templateUrl: './global-info.component.html',
  styleUrls: ['./global-info.component.css']
})
export class GlobalInfoComponent implements OnInit {

  globalTopPerformances: Array<CountryPerformance>;
  constructor(private  dataService: DataService) { }

  ngOnInit() {
    this.dataService.getGlobalTopPerformances()
      .subscribe(globalTopPerformances => this.globalTopPerformances = globalTopPerformances);
  }

}
