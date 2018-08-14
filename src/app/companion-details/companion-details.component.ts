import { Component, OnChanges, Input } from '@angular/core';

import { LoggingService } from './../services/logging.service';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-companion-details',
  template: `
  <div *appCustomUnless="!companionID">
    <p appHighlight>
      companion-details works!
    </p>
    <span>{{ companionID }}</span>
    <p class="appHighlight"></p>
      <div class="boxedExact">
        <div>
          <img
          style="float: left; margin-right: 10px"
            [src]="companions[companionID-1].image"
            [alt]="companions[companionID-1].name"
            width="110" height="110"
          >
        </div>
        <div>
          <span class="bold">
            name: {{ companions[companionID-1].name }}</span>
          <br/>
          <span>rating: {{ companions[companionID-1].rating }}</span>
          <br/>
          preferred companions:
          <br/>
          quiet, discussing sports, discussing politics, discussing economic issues
          <br/>
          interests:
          <br/>
          policy records:

        </div>
      </div>
    </div>
  `,
  styleUrls: ['./companion-details.component.css'],
  providers: [ ]
})
export class CompanionDetailsComponent implements OnChanges {

  // @Input() companionID: number;
  companionID: number;
  // temporary measure
  companions = [
    { id: 1, name: 'Alex', rating: 8.4, isSelected: true, image: '../assets/Alex.jpg' },
    { id: 2, name: 'Ben', rating: 8.2, isSelected: false, image: '../assets/Ben.jpg' },
    { id: 3, name: 'Cathy', rating: 8.6, isSelected: true, image: '../assets/Cathy.jpg' }
  ];

  constructor(private logService: LoggingService, private dataService: DataService) {
    this.dataService.companionIDupdated.subscribe(
      (id: number) => this.companionID = id
    );
  }

  ngOnChanges() {
    // const logService = new LoggingService();
    // this.logService.logStatusChange('using Service from Details = ' + this.companionID);
  }
}
