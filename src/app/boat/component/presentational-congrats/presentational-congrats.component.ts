import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Boat } from '../../model/boat.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-presentational-congrats',
  templateUrl: './presentational-congrats.component.html',
  styleUrls: ['./presentational-congrats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class PresentationalCongratsComponent implements OnInit {

  @Input() boat: Boat;
  @Output() addBoat = new EventEmitter<null>();
  @ViewChild('imgCongrat', {static: true}) imgCongrat: ElementRef;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    const imgEL = this.imgCongrat.nativeElement as HTMLElement;
    imgEL.style.height = '660px';
  }

  validateBoat() {
    this.addBoat.emit();
  }
}
