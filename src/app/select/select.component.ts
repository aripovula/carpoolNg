import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  companionIDforDetails = undefined;
  constructor() { }

  ngOnInit() {
  }

  onCompanionSelected = (id: number) => {
    this.companionIDforDetails = id;
    console.log( 'ID2 = ' + id);
  }
}
