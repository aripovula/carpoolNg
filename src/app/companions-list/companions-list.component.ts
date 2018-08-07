import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-companions-list',
  template: `
  <div>
  List of possible companions - please select carefully !
  <!-- <input type="text" (input)="onLookUpNameSelected($event)"> {{ lookUpName }} -->
  <input type="text" [(ngModel)]="lookUpName">
  <span [ngClass]="{highlight: lookUpName.length > 4}">{{ lookUpName }}</span>
  <br/>
  <div *ngIf="companions">
    <div *ngFor="let companion of companions; let ind = index">
      <div class="post-container" [ngStyle]="{backgroundColor: getBGColor() }">
        <div class="post-thumb">
          <img style="float: right"
            [src]="companion.image"
            [alt]="companion.name"
            width="62" height="55"
            (click)="onCompanionSelected(companion.id)"
          >
          <input style="float: left" type="checkbox" name="selected" value="selected"
            [checked]="companion.isFrequentlySelected"
          >
        </div>
        <div class="post-content" [ngClass]="{highlight: ind==1}">
          <span class="post-title">
            {{ind+1}}. name: {{ companion.name }}</span>
          <br/>
          <span>rating: {{ companion.rating }}</span>
          <!--  {{ selectedCompanion }}
          <!-- <br/><span style="font-size:12px">click image to select / for details, click again to deselect</span> -->
        </div>
      </div>

    </div>
  </div>
  <app-companion-details></app-companion-details>
</div>
  `,
  styleUrls: ['./companions-list.component.css']
})

export class CompanionsListComponent implements OnInit {
  @Output() selectedCompanionID = new EventEmitter<number>();
  lookUpName = 'Ben';
  selectedCompanion = undefined;
  companionIDforDetails = undefined;
  companions = [
    { id: 1, name: 'Alex', rating: 8.4, isFrequentlySelected: true, image: '../assets/Alex.jpg' },
    { id: 2, name: 'Ben', rating: 8.2, isFrequentlySelected: false, image: '../assets/Ben.jpg' },
    { id: 3, name: 'Cathy', rating: 8.6, isFrequentlySelected: true, image: '../assets/Cathy.jpg' }
  ];

  constructor() { }

  ngOnInit() {
    // console.log(this.companions[1]);
  }

  onLookUpNameSelected(event: Event) {
    this.lookUpName = (<HTMLInputElement>event.target).value;
    console.log(this.lookUpName);
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
