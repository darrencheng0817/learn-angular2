import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-global-info',
  templateUrl: './global-info.component.html',
  styleUrls: ['./global-info.component.css']
})
export class GlobalInfoComponent implements OnInit {

  @Input() globalTopPerformances: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
