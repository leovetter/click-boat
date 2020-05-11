import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Output() click = new EventEmitter<null>();

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.click.emit();
  } 

}
