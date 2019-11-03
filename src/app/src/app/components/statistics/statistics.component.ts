import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Peter', weight: 7, symbol: '70%'},
  {position: 2, name: 'Maria', weight: 6, symbol: '55%'},
  {position: 3, name: 'Kate', weight: 3, symbol: '30%'},
  {position: 4, name: 'John', weight: 2, symbol: '28%'},
];


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
