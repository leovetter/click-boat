import { Component, OnInit } from '@angular/core';
import { catamaranSettings } from '../../model/catamaranSettings.model';
import { BoatService } from '../../service/boat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smart-catamaran',
  template: `<app-presentational-boat [catamaran]="catamaran"
                                      (updateAndAddBoat)="updateAndAddBoat($event)">
  </app-presentational-boat>`,
})
export class SmartCatamaranComponent implements OnInit {

  catamaran = true;

  constructor(private boatService: BoatService,
              private router: Router) { }

  ngOnInit(): void {
  }

  updateAndAddBoat(catamaranSettings: catamaranSettings) {

    this.boatService.updateCatamaran(catamaranSettings);
    this.router.navigateByUrl('boat/congrats');
  }

}
