import { Injectable, EventEmitter } from '@angular/core';

import { Companion } from './../models/companion.model';
import { LoggingService } from './../services/logging.service';
import { FirebaseService } from './../services/firebase.service';


@Injectable()
export class DataService {
    companions = [
        new Companion( 1, 'Alex', 8.4, false, '../assets/Alex.jpg'),
        new Companion( 2, 'Ben', 8.2, false, '../assets/Ben.jpg' ),
        new Companion( 3, 'Cathy', 8.6, false, '../assets/Cathy.jpg')
    ];

    companionID = undefined;
    companionsSelected = [];

    companionIDupdated = new EventEmitter<number>();

    constructor(private logService: LoggingService, private fbService: FirebaseService) { }

    addCompanion(id: number, name: string, rating: number, isSelected: boolean, image: string) {
        this.companions.push({
            id, name, rating, isSelected, image
        });
    }

    setCompanionID(id: number) {
        this.companionID = id;
        this.companionIDupdated.emit(this.companionID);
        this.logService.logStatusChange('using Service from ? = ' + this.companionID);
    }

    setCompanionsSelected(companionsSelectedFromDB: Array<number>) {
        for (const companionSelectedFromDB of companionsSelectedFromDB) {
            console.log('companionSelectedFromDB = ' + companionSelectedFromDB);
            this.companions[companionSelectedFromDB - 1].isSelected = true;
        }
    }

    handleCompanionSelection(id: number) {
        this.companions[id - 1].isSelected = !this.companions[id - 1].isSelected;
        this.clearSelectedCompanion();
        for (const companion of this.companions) {
            if (companion.isSelected) {
                this.companionsSelected.push(companion.id);
            }
        }
        this.logService.logStatusChange('using Service from data.service  companionsSelected = ');
        this.logService.logStatusChange( this.companionsSelected );
        return this.companionsSelected;
    }

    clearSelectedCompanion() {
        this.companionsSelected.length = 0;
    }

    getSelectedCompanions() { return this.companionsSelected; }
}
