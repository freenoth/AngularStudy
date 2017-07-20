import {AfterViewInit, Component, OnInit, ViewChild, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {
  // @ViewChild('searchRef')
  // searchRef;

  @Input()
  public placeholder;

  @Output()
  public search = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  input() {

  }

  // public search(value) {
  //   console.log(value);
  // }

  ngAfterViewInit() {
    // console.log(this.searchRef);
  }
}
