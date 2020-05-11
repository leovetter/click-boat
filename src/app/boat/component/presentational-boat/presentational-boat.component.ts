import { Component, OnInit, Output, EventEmitter, Input, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { catamaranSettings } from '../../model/catamaranSettings.model';
import { sailingSettings } from '../../model/sailingSettings.model';

@Component({
  selector: 'app-presentational-boat',
  templateUrl: './presentational-boat.component.html',
  styleUrls: ['./presentational-boat.component.scss']
})
export class PresentationalBoatComponent implements OnInit {

  @Input() catamaran: boolean;
  @Input() sailing: boolean;
  boatGroup: FormGroup;
  @Output() updateAndAddBoat = new EventEmitter<catamaranSettings | sailingSettings>();
  @ViewChild('imgBoat', {static: true}) imgBoat: ElementRef;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.boatGroup = this.buildBoatGroup();
    const imgEL = this.imgBoat.nativeElement as HTMLElement;
    imgEL.style.height = '660px';    
  }

  buildBoatGroup() {
    const boatGroup = this.fb.group({
      length: ['', Validators.required],
      width: ['', Validators.required],
      draught: ['', Validators.required],
      crew: [false, Validators.required],
      annex: [false, Validators.required],
    });
    if(this.sailing) {
      boatGroup.addControl('foil', new FormControl());
      boatGroup.get('foil').setValue(false);
      boatGroup.setValidators(Validators.required);
    }

    return boatGroup;
  }

  updateBoat() {
    if (this.boatGroup.valid) {
      this.updateAndAddBoat.emit(this.boatGroup.value);
    }
  }

  setCheckBox(type: string) {
    this.boatGroup.get(type).setValue(!this.boatGroup.get(type).value);
  }

  setLength(length: string) {
    this.boatGroup.get('length').setValue(length);
  }

  setWidth(width: string) {
    this.boatGroup.get('width').setValue(width);
  }

  setDraught(draught: string) {
    this.boatGroup.get('draught').setValue(draught);
  }
}
