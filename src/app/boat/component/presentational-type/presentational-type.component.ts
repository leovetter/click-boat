import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-presentational-type',
  templateUrl: './presentational-type.component.html',
  styleUrls: ['./presentational-type.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresentationalTypeComponent implements OnInit {

  @Output() newBoatType = new EventEmitter<string>();
  typeGroup: FormGroup;
  @ViewChild('imgType', {static: true}) imgType: ElementRef;

  constructor(private fb: FormBuilder,
              private translate: TranslateService) { }

  ngOnInit(): void {
    this.typeGroup = this.buildTypeGroup();
    const imgEL = this.imgType.nativeElement as HTMLElement;
    imgEL.style.height = '660px';    
  }

  buildTypeGroup() {
    return this.fb.group({
      boatType: ['', Validators.required]
    });
  }

  setSelectedRadio(type: string) {
    this.typeGroup.get('boatType').setValue(type);
  }

  goToNextPage() {
    if (this.typeGroup.valid) {
      this.newBoatType.emit(this.typeGroup.get('boatType').value);
    }
  }

}
