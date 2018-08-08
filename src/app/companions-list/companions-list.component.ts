import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

import { LoggingService } from './../services/logging.service';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-companions-list',
  template: `
  <div>
  List of possible companions - please select carefully !
  <!-- <input type="text" (input)="onLookUpNameSelected($event)"> {{ lookUpName }} -->
  <input type="text" [(ngModel)]="lookUpName">
  <span [ngClass]="{highlight: lookUpName.length > 4}">{{ lookUpName }}</span>
  <br/>
  <input type="text" #lookUpName2>
  <button (click)="onLookUpNameSelected2(lookUpName2)">Submit</button>
  <ng-content></ng-content>
  <input type="text" #lookUpName3>
  <button (click)="onLookUpNameSelected3(lookUpName3)">Submit</button>
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
</div>
  `,
  styleUrls: ['./companions-list.component.css'],
  providers: [ ]
})

export class CompanionsListComponent implements OnInit, OnChanges {
  @Output() selectedCompanionID = new EventEmitter<number>();
  lookUpName = 'Ben';
  lookUpName2 = 'Ben';
  @ViewChild('lookUpName3') lookUpName3: ElementRef;
  selectedCompanion = undefined;
  companionIDforDetails = undefined;
  companions: { id: number, name: string, rating: number, isFrequentlySelected: boolean, image: string }[] = [];

  // companions = [
  //   { id: 1, name: 'Alex', rating: 8.4, isFrequentlySelected: true, image: '../assets/Alex.jpg' },
  //   { id: 2, name: 'Ben', rating: 8.2, isFrequentlySelected: false, image: '../assets/Ben.jpg' },
  //   { id: 3, name: 'Cathy', rating: 8.6, isFrequentlySelected: true, image: '../assets/Cathy.jpg' }
  // ];

  constructor(private logService: LoggingService, private dataService: DataService, private router: Router) {  }

  ngOnInit() {
    // console.log(this.companions[1]);
    this.companions = this.dataService.companions;
    this.selectedCompanion = this.dataService.companionID;
  }

  ngOnChanges() {
    // const logService = new LoggingService();
    // this.logService.logStatusChange('using Service from Details = ' + this.companionID);
  }

  onLookUpNameSelected(event: Event) {
    this.lookUpName = (<HTMLInputElement>event.target).value;
    console.log('1' + this.lookUpName);
  }

  onLookUpNameSelected2(newWay: HTMLInputElement) {
    this.lookUpName2 = newWay.value;
    console.log('2' + this.lookUpName2);
    this.router.navigate(['/feedback', this.lookUpName2, this.lookUpName2]);
  }

  onLookUpNameSelected3() {
    // this.lookUpName3.nativeElement.value = 'Got It !';
    this.lookUpName3 = this.lookUpName3.nativeElement.value;
    console.log('3' + this.lookUpName3);
  }

  onCompanionSelected(id: number) {
    // this.selectedCompanionID.emit(id);
    // this.selectedCompanion = id;
    // this.logService.logStatusChange('using Service from List = ' + this.selectedCompanion);
    this.dataService.setCompanionID(id);
  }

  getBGColor() {
    return this.selectedCompanion === 1 ? 'lightgray' : '';
  }
}
