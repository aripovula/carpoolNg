import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  template: `
  <div id="container">
    <div id="left">
      select works!
      <app-companion-details [companionID]="companionIDforDetails"></app-companion-details>
    </div>
    <div id="right">
      <app-companions-list (selectedCompanionID)="onCompanionSelected($event)"></app-companions-list>
    </div>
  </div>
    `,
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  companionIDforDetails = undefined;
  constructor() { }

  ngOnInit() {
  }

  onCompanionSelected = (id: number) => {
    this.companionIDforDetails = id;
    console.log('ID SEL = ' + id);
  }

}
