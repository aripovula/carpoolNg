import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-companion-item',
  templateUrl: './companion-item.component.html',
  styleUrls: ['./companion-item.component.css']
})

export class CompanionItemComponent implements OnInit {
  @Input('companion') companion: any;
  @Input('ind') ind: any;
  @Output() selectedCompanionID = new EventEmitter<number>();
  selectedCompanion = undefined;
  // isSelected = true;
  constructor() { }

  ngOnInit() {
  }

  onCompanionSelected(id: number) {
    this.selectedCompanionID.emit(id);
    this.selectedCompanion = id;
    console.log('ID = ' + id);
  }

  getBGColor() {
    return this.selectedCompanion === 1 ? 'lightgray' : '';
  }
}
