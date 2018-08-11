import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup',
  template: `
  <div id="container" class="margintop">
    <div id="left">
      <app-profile></app-profile>
    </div>
    <div id="right">
      <app-prefs></app-prefs>
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
