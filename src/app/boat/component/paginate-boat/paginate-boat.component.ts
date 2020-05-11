import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Boat } from '../../model/boat.model';

@Component({
  selector: 'app-paginate-boat',
  templateUrl: './paginate-boat.component.html',
  styleUrls: ['./paginate-boat.component.scss']
})
export class PaginateBoatComponent implements OnInit, OnChanges {

  @Input() boats: Boat[];
  @Input() pageSize: number;
  @Input() initialPage = 1;
  @Output() changePage = new EventEmitter<any>(true);
  pages: number[];

  constructor() { }

  ngOnInit(): void {

     // set page if boats array isn't empty
     if (this.boats && this.boats.length) {
      this.setPage(this.initialPage);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    
    // reset page if boats array has changed
    if (changes.boats.currentValue !== changes.boats.previousValue) {
      this.setPage(this.initialPage);
    }
  }

  setPage(page: number) {

    const maxPage = Math.ceil(this.boats.length / this.pageSize);
    this.pages = Array(maxPage).fill(0).map((x,i)=>i+1);

    let startIndex = 0;
    let endIndex = this.pageSize;
    if(page !== 1) {
      startIndex = (page - 1) * this.pageSize;
      endIndex = startIndex + this.pageSize;
     
    }

    const pageOfItems = this.boats.slice(startIndex, endIndex);
    this.changePage.emit(pageOfItems);
  }

}
