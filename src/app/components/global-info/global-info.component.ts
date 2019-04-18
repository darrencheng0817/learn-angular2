import { Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data-service.service';

@Component({
  selector: 'app-global-info',
  templateUrl: './global-info.component.html',
  styleUrls: ['./global-info.component.css']
})
export class GlobalInfoComponent implements OnInit {

  globalTopPerformances: Array<any>;
  constructor(private  dataService: DataService) { }

  ngOnInit() {
    this.dataService.getGlobalTopPerformances()
      .subscribe(globalTopPerformances => this.globalTopPerformances = globalTopPerformances);
  }

}
