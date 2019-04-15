import {Component, OnInit} from '@angular/core';
import {CountryData} from './CountryData';
declare let google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  keyword:string='';
  globalTopPerformances = [['US', 88], ['UK', 85], ['China', 76]];
  fakeData: CountryData = {
    allCountries : [
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ],
    best : [['AAA', 88], ['BBB', 85], ['CCC', 76]],
    worst : [['CCC', 88], ['BBB', 85], ['AAA', 76]]
  };

  data:Data = {
    football: this.fakeData
  };
  constructor() { }

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
    //init map here
    google.charts.load('current', {'packages':['geochart']});
    google.charts.setOnLoadCallback(this.drawEmptyRegionsMap);
  }

  handleInput(keyword: string) {
    //update map here
    if(this.data[keyword]) {
      this.drawRegionsMap(this.data[keyword].allCountries);
    }
  }
}

interface Data {
  [key: string]: CountryData;
}
