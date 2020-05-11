import { Component, OnInit } from '@angular/core';
import { Boat } from '../../model/boat.model';
import { BoatStore } from '../../state/boat.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smart-home',
  template: `<app-presentational-home [boats]="boats"
                                      (startCreateBoat)="startCreateBoat()">
  </app-presentational-home>`,
})
export class SmartHomeComponent implements OnInit {

  boats: Boat[];

  constructor(private boatStore: BoatStore,
              private router: Router) { }

  ngOnInit(): void {

    this.boatStore.state$.subscribe(boatState => {
      this.boats = boatState.boats;
    });
  }

  startCreateBoat() {
    this.router.navigateByUrl('boat/type');
  }
}
