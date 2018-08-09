import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  template: `
  <div id="container" class="margintop">
    <div id="left">
      select works!
       <!--using @Input <app-companion-details [companionID]="companionIDforDetails"></app-companion-details> -->
       <app-companion-details ></app-companion-details>
    </div>
    <div id="right">
      <!-- <app-companions-list (selectedCompanionID)="onCompanionSelected($event)">&nbsp;&nbsp;&nbsp;&nbsp;</app-companions-list> -->
      <app-companions-list >&nbsp;&nbsp;&nbsp;&nbsp;</app-companions-list>
      </div>
  </div>
    `,
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  // companionIDforDetails = undefined;
  constructor() { }

  ngOnInit() {
  }

  // onCompanionSelected = (id: number) => {
  //   this.companionIDforDetails = id;
  //   console.log('ID SEL = ' + id);
  // }

}
