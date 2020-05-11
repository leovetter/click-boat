import { Component, OnInit } from '@angular/core';
import { BoatService } from '../../service/boat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smart-type',
  template: `<app-presentational-type (newBoatType)="newBoatType($event)">
  </app-presentational-type>`,
})
export class SmartTypeComponent implements OnInit {

  constructor(private boatService: BoatService,
              private router: Router) { }

  ngOnInit(): void {
  }

  newBoatType(type: string) {
    
    const url = this.boatService.createNewBoat(type);
    this.router.navigateByUrl(url);
  }

}
