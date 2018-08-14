import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { DataService } from './data.service';
import { LoggingService } from './../services/logging.service';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  constructor(private http: Http, private logService: LoggingService) {}

  saveCompanionsSelected(selectedCompanions) {
    this.logService.logStatusChange('in saveCompanionsSelected');
    return this.http.put('https://carpoolng-4d8e8.firebaseio.com/companionsSelected.json', selectedCompanions);
  }

  getCompanionsSelected() {
    this.logService.logStatusChange('in getCompanionsSelected');
    return this.http.get('https://carpoolng-4d8e8.firebaseio.com/companionsSelected.json');
  }


}
