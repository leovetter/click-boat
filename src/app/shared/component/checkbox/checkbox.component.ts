import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() selected: boolean;
  @Input() type: string;
  @Output() enableCheckBox = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  activateCheckBox() {
    this.enableCheckBox.emit(this.type);
  }
}
