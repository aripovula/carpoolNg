import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-companion-item',
  templateUrl: './companion-item.component.html',
  styleUrls: ['./companion-item.component.css']
})

export class CompanionItemComponent implements OnInit {
  @Input('companion') companion: any;
  selectedCompanion = undefined;
  // isSelected = true;
  constructor() { }

  ngOnInit() {
  }

  onCompanionSelected() {
    this.selectedCompanion = 1;
    console.log('in onCompanionSelected');
  }

  getBGColor() {
    return this.selectedCompanion === 1 ? 'green' : 'gray';
  }
}
