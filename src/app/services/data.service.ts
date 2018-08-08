import { LoggingService } from './../services/logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DataService {
    companions = [
        { id: 1, name: 'Alex', rating: 8.4, isFrequentlySelected: true, image: '../assets/Alex.jpg' },
        { id: 2, name: 'Ben', rating: 8.2, isFrequentlySelected: false, image: '../assets/Ben.jpg' },
        { id: 3, name: 'Cathy', rating: 8.6, isFrequentlySelected: true, image: '../assets/Cathy.jpg' }
    ];

    companionID = undefined;

    companionIDupdated = new EventEmitter<number>();

    constructor(private logService: LoggingService) { }

    addCompanion(id: number, name: string, rating: number, isFrequentlySelected: boolean, image: string) {
        this.companions.push({
            id, name, rating, isFrequentlySelected, image
        });
    }

    setCompanionID(id: number) {
        this.companionID = id;
        this.companionIDupdated.emit(this.companionID);
        this.logService.logStatusChange('using Service from ? = ' + this.companionID);
    }
}
