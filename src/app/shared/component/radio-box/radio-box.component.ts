import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-radio-box',
  templateUrl: './radio-box.component.html',
  styleUrls: ['./radio-box.component.scss']
})
export class RadioBoxComponent implements OnInit {

  @Input() selectedType: String;
  @Input() type: string;
  @Output() enableRadio = new EventEmitter<string>();

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  activateRadio() {
    this.enableRadio.emit(this.type);
  }

}
