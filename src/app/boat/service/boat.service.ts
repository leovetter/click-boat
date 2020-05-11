import { Injectable } from '@angular/core';
import { Boat } from '../model/boat.model';
import { BoatStore } from '../state/boat.store';
import { catamaranSettings } from '../model/catamaranSettings.model';
import { sailingSettings } from '../model/sailingSettings.model';

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  constructor(private boatStore: BoatStore) { }

  createNewBoat(type: string) {

    if(type === 'sailing') {

      const boat = new Boat();
      boat.type = 'Sailing Ship';
      this.boatStore.saveBoat(boat);
      return 'boat/sailing';
    } else if (type === 'catamaran') {

      const boat = new Boat();
      boat.type = 'Catamaran';
      this.boatStore.saveBoat(boat);
      return 'boat/catamaran';
    } else {
      
      const boat = new Boat();
      type === 'motor' ? boat.type = 'Motor boat': null;
      type === 'rigid' ? boat.type = 'Semi-rigid': null;
      type === 'barge' ? boat.type = 'Barge': null;
      type === 'jetSki' ? boat.type = 'Jet-Ski': null;
      type === 'yacht' ? boat.type = 'Yacht': null;
      this.boatStore.saveBoat(boat);
      return 'boat/congrats';
    }
  }

  addBoat() {
    this.boatStore.addBoat();
  }

  updateCatamaran(catamaranSettings: catamaranSettings) {
    this.boatStore.updateCatamaran(catamaranSettings);
  }

  updateSailing(sailingSettings: sailingSettings) {
    this.boatStore.updateSailing(sailingSettings);
  }
}
