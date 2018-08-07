import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companions-list',
  templateUrl: './companions-list.component.html',
  styleUrls: ['./companions-list.component.css']
})

export class CompanionsListComponent implements OnInit {
  lookUpName = 'Ben';
  selectedCompanion = undefined;
  companionIDforDetails = undefined;
  companions = [
    {id: 1, name: 'Alex', rating: 8.4, isFrequentlySelected: true, image: '../../assets/Alex.jpg'},
    {id: 2, name: 'Ben', rating: 8.2, isFrequentlySelected: false, image: '../../assets/Ben.jpg'},
    {id: 3, name: 'Cathy', rating: 8.6, isFrequentlySelected: true, image: '../../assets/Cathy.jpg'}
  ];

  constructor() { }

  ngOnInit() {
    // console.log(this.companions[1]);
  }

  onLookUpNameSelected(event: Event) {
    this.lookUpName = (<HTMLInputElement>event.target).value;
    console.log(this.lookUpName);
  }

  onCompanionSelected = (id: number) => {
    this.companionIDforDetails = id;
    console.log( 'ID2LS = ' + id);
  }
}
