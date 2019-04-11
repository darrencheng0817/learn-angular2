import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  globalTopPerformings = [['US', 88], ['UK', 85], ['China', 76]];
  data = {
    football: {
      allCountries : [
        ['Country', 'performance'],
        ['US', 87],
        ['UK', 84]
      ],
      best : [['AAA', 88], ['BBB', 85], ['CCC', 76]],
      worst : [['CCC', 88], ['BBB', 85], ['AAA', 76]]
    }
  };
  constructor() { }

  ngOnInit() {
    //init map here
    console.log("init map");
  }

  handleInput(keyword) {
    //update map here
    console.log(keyword);
  }
}
