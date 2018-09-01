import { LoggingService } from './../services/logging.service';
import { FirebaseService } from './../services/firebase.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DataService {
    companions = [
        { id: 1, name: 'Alex', rating: 8.4, isSelected: true, image: '../assets/Alex.jpg' },
        { id: 2, name: 'Ben', rating: 8.2, isSelected: false, image: '../assets/Ben.jpg' },
        { id: 3, name: 'Cathy', rating: 8.6, isSelected: true, image: '../assets/Cathy.jpg' }
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
