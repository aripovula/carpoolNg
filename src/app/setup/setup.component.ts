import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup',
  template: `
  <div id="container" class="margintop">
    <div id="left">
      <app-profile></app-profile>
    </div>
    <div id="right">
      <app-profile></app-profile>
    </div>
    </div>
  `,
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
