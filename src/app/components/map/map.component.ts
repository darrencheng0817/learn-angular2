import { Component, OnInit} from '@angular/core';
import {MessageService} from '../../services/message-service.service';
import {DataService} from '../../services/data-service.service';
declare let google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  countryBestPerformances: Array<any>;
  countryWorstPerformances: Array<any>;
  keyword: string = "";

  constructor(private message: MessageService, private dataService: DataService) {
    this.message.messageObserve.subscribe((keyword: string) => {
      this.keyword = keyword;
      this.dataService.getPerformancesByKeyword(keyword)
        .subscribe(data => {
          if (data) {
            const performances = data.data;
            const performanceArray: Array<Array<string|number>> = [];
            performances.forEach(element => {
              performanceArray.push([element.name, element.performance]);
            });
            this.drawRegionsMap(performanceArray);
            this.countryBestPerformances = performances.concat().sort(function compare(a, b) {
              return a.performance - b.performance;
            });
            this.countryWorstPerformances = performances.concat().sort(function compare(a, b) {
              return b.performance - a.performance;
              });
          } else {
            this.countryBestPerformances = [];
            this.countryWorstPerformances = [];
          }
        });
    });
  }

  drawRegionsMap(data:Array<any>) {
    let properties:Array<Array<string|number>> = [['Country', 'performance']];
    let dataTabble = google.visualization.arrayToDataTable(properties.concat(data));
    let options = {};
    const mapElement = document.getElementById('map');
    if (mapElement) {
      let chart = new google.visualization.GeoChart(mapElement);
      chart.draw(dataTabble, options);
    }
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
    //init map here
    google.charts.load('current', {'packages':['geochart']});
    google.charts.setOnLoadCallback(this.drawEmptyRegionsMap);
  }


}
