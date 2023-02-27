import { Component } from '@angular/core';
import * as data from '../assets/teste.json';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {

  filterContent: any[] = [];

  all: any[] = [];
  content = data;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.content.length; i++) {
      i === 0 ? this.all.push(this.content[i]) : this.filterContent.push(this.content[i])
    }

    console.log(this.filterContent)
  }


}
