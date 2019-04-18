import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../services/message-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  keyword:string='';
  constructor(private message: MessageService) { }

  ngOnInit() {
  }

  handleInput(keyword: string) {
    this.message.setKeyword(keyword);
  }

}
