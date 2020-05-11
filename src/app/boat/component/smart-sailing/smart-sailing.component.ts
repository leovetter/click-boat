import { Component, OnInit } from '@angular/core';
import { sailingSettings } from '../../model/sailingSettings.model';
import { BoatService } from '../../service/boat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smart-sailing',
  template: `<app-presentational-boat [sailing]="sailing"
                                      (updateAndAddBoat)="updateAndAddBoat($event)">
  </app-presentational-boat>`,
})
export class SmartSailingComponent implements OnInit {

  sailing = true;

  constructor(private boatService: BoatService,
              private router: Router) { }

  ngOnInit(): void {
  }

  updateAndAddBoat(sailingSettings: sailingSettings) {
    console.log(sailingSettings);
    this.boatService.updateSailing(sailingSettings);
    this.router.navigateByUrl('boat/congrats');
  }
}
