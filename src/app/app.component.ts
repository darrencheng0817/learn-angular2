import {Component, OnInit} from '@angular/core';
import {CountryPerformance} from './models/CountryPerformance';
import {DataServiceService} from './services/data-service.service';
declare let google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  keyword:string='';
  globalTopPerformances: Array<any>;
  countryBestPerformances: Array<any>;
  countryWorstPerformances: Array<any>;

  constructor(private dataServiceService: DataServiceService) { }

  drawRegionsMap(data:Array<any>) {
    let properties = [['Country', 'performance']];
    let dataTabble = google.visualization.arrayToDataTable(properties.concat(data));
    let options = {};

    let chart = new google.visualization.GeoChart(document.getElementById('map'));

    chart.draw(dataTabble, options);
  }

  drawEmptyRegionsMap() {
    let data = google.visualization.arrayToDataTable([
      ['Country', 'performance']
    ]);
    let options = {};

    let chart = new google.visualization.GeoChart(document.getElementById('map'));

    chart.draw(data, options);
  }

  ngOnInit() {
    this.dataServiceService.getGlobalTopPerformances()
      .subscribe(globalTopPerformances => this.globalTopPerformances = globalTopPerformances);
    //init map here
    google.charts.load('current', {'packages':['geochart']});
    google.charts.setOnLoadCallback(this.drawEmptyRegionsMap);
  }

  handleInput(keyword: string) {
    //update map here
    this.dataServiceService.getPerformances(keyword)
      .subscribe(data => {
        if (data) {
          this.drawRegionsMap(data.allCountries);
          this.countryBestPerformances = data.best;
          this.countryWorstPerformances = data.worst;
        } else {
          this.countryBestPerformances = [];
          this.countryWorstPerformances = [];
        }
      });
  }
}


