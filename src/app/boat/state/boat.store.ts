import { Injectable } from '@angular/core'
import { Store } from 'src/app/core/state/store';
import { HttpClient } from '@angular/common/http';
import { BoatState } from './boat.state';
import { Boat } from '../model/boat.model';
import { catamaranSettings } from '../model/catamaranSettings.model';
import { sailingSettings } from '../model/sailingSettings.model';

@Injectable({
    providedIn: 'root'
})
export class BoatStore extends Store<BoatState> {
  
    constructor (private http: HttpClient) {
        super(new BoatState());
        this.loadInitialState().subscribe((initialState: Boat[]) => {
            this.setState({
                ...this.state,
                allBoats: [...initialState],
                boats: [...initialState]
            });
        });
    }

    loadInitialState() {
        return this.http.get('assets/data/boats.json');
    }

    filterState(searchTerm: string) {
        let boats = this.state.allBoats.filter((boat: Boat) => {
            
            return boat.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                   boat.length?.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                   boat.width?.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                   boat.draught?.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                   boat.foil?.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                   boat.annex?.toString().toLowerCase().includes(searchTerm.toLowerCase());
        });
        this.setState({
            ...this.state,
            boats: [...boats]
        });
    }

    saveBoat(boat: Boat) {
        this.setState({
            ...this.state,
            boat: {...boat}
        });
    }

    addBoat() {
        const allBoats = this.state.allBoats;
        allBoats.push(this.state.boat);
        const newBoats = this.state.boats;
        newBoats.push(this.state.boat)
        this.setState({
            ...this.state,
            allBoats: [...allBoats],
            boats: [...newBoats]
        });
    }

    updateCatamaran(catamaranSettings: catamaranSettings) {
        const boat = this.updateSettings(catamaranSettings);
        this.setState({
            ...this.state,
            boat: {...boat}
        });
    }

    updateSailing(sailingSettings: sailingSettings) {
        const boat = this.updateSettings(sailingSettings);
        boat.foil = sailingSettings.foil;
        this.setState({
            ...this.state,
            boat: {...boat}
        });
    }

    updateSettings(settings: sailingSettings | catamaranSettings) {

        const boat = this.state.boat;
        boat.length = settings.length;
        boat.width = settings.width;
        boat.draught = settings.draught;
        boat.crew = settings.crew;
        boat.annex = settings.annex;

        return boat;
    }
}