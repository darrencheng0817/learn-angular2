import {Component, OnInit} from '@angular/core';
import { GoogleChartComponent} from './ChartComponent.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  keyword:string='';
  globalTopPerformings = [['US', 88], ['UK', 85], ['China', 76]];
  data:Data = {
    football: {
      allCountries : [
        ['US', 87],
        ['UK', 84]
      ],
      best : [['AAA', 88], ['BBB', 85], ['CCC', 76]],
      worst : [['CCC', 88], ['BBB', 85], ['AAA', 76]]
    }
  };
  constructor() { }

  drawRegionsMap(data) {
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
    //init map here
    google.charts.load('current', {'packages':['geochart']});
    google.charts.setOnLoadCallback(this.drawEmptyRegionsMap);
  }

  handleInput(keyword: string) {
    //update map here
    if(this.data[keyword]) {
      this.drawRegionsMap(this.data[keyword]['allCountries']);
    }
  }


}

interface Data {s
  [key: string]: object;
}
