import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() type: string;
  @Input() setting: string;
  @Output() setInput = new EventEmitter<string>();
  number: string;

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    this.setInput.emit(this.number);
  }
}
