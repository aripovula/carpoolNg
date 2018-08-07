import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-companion-details',
  template: `
    <p>
      companion-details works!
      <span *ngIf="companionID">
        id = {{ companionID }}
      </span>
    </p>
    preferred companions:  quiet, discussing sports, discussing politics, discussing economic issues
    interests:
  `,
  styleUrls: ['./companion-details.component.css']
})
export class CompanionDetailsComponent implements OnInit {

  @Input() companionID: number;

  constructor() { }

  ngOnInit() {
  }

}
