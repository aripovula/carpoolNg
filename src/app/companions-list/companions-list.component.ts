import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companions-list',
  templateUrl: './companions-list.component.html',
  styleUrls: ['./companions-list.component.css']
})
export class CompanionsListComponent implements OnInit {

  companions = [
    {name: 'Alex', rating: 8.4},
    {name: 'Ben', rating: 8.2},
    {name: 'Charlie', rating: 8.6}
  ];

  constructor() { }

  ngOnInit() {
    // console.log(this.companions[1]);
  }

}
