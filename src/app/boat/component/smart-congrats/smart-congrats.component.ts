import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Boat } from '../../model/boat.model';
import { BoatStore } from '../../state/boat.store';
import { BoatService } from '../../service/boat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smart-congrats',
  template: `<app-presentational-congrats [boat]="boat"
                                          (addBoat)="addBoat()">
  </app-presentational-congrats>`,
})
export class SmartCongratsComponent implements OnInit {

  boat: Boat;

  constructor(private boatStore: BoatStore,
              private boatService: BoatService,
              private router: Router) { }

  ngOnInit(): void {

    this.boatStore.state$.subscribe(boatState => {
      this.boat = boatState.boat;
    });
  }

  addBoat() {
    this.boatService.addBoat();
    this.router.navigateByUrl('boat/home');
  }
}
