import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  @Output() setInput = new EventEmitter<string>();
  searchTerm: string;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  onChange() {
    this.setInput.emit(this.searchTerm);
  }

}
