import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BoatStore } from '../../state/boat.store';
import { Boat } from '../../model/boat.model';
import { FormGroup, FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentational-home',
  templateUrl: './presentational-home.component.html',
  styleUrls: ['./presentational-home.component.scss']
})
export class PresentationalHomeComponent implements OnInit {

  @Input() boats: Boat[];
  searchGroup: FormGroup;
  pageOfBoats: Boat[];
  pageSize = 10;
  searchField: string;
  search: string;
  @Output() startCreateBoat = new EventEmitter<null>();
  @ViewChild('imgMain', {static: true}) imgHome: ElementRef;

  constructor(private translate: TranslateService,
              private store: BoatStore,
              private fb: FormBuilder) { }

  ngOnInit(): void {

    this.searchGroup = this.buildSearchGroup();

    this.searchGroup.get('search').valueChanges.subscribe((searchTerm: string) => {
      
      this.store.filterState(searchTerm);
    });

    const imgEL = this.imgHome.nativeElement as HTMLElement;
    imgEL.style.height = '660px';    
  }

  buildSearchGroup() {
    return this.fb.group({
      search: '',
      individuType: ['', Validators.required],
    });
  }

  onChangePage(boats: Boat[]) {
    this.pageOfBoats = boats;
  }

  setInput(searchTerm: string) {
    this.searchGroup.get('search').setValue(searchTerm);
  }

  setSelectedRadio(type: string) {
    this.searchGroup.get('individuType').setValue(type);
  }

  goToType() {
    if (this.searchGroup.valid) {
      this.startCreateBoat.emit();
    }
  }
}
