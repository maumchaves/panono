import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export enum ViewOptions {
  Grid = 'Grid',
  List = 'List'
}

export enum FilterOptions {
  All = 'All',
  Favorites = 'Favorites'
}

@Component({
  selector: 'panono-explore-sidebar',
  templateUrl: './explore-sidebar.component.html',
  styleUrls: ['./explore-sidebar.component.scss']
})
export class ExploreSidebarComponent implements OnInit {

  viewOptions = ViewOptions;
  filterOptions = FilterOptions;
  currentView = ViewOptions.Grid;
  currentFilter = FilterOptions.All;

  @Input() toggle;
  @Output() onViewSelect = new EventEmitter<ViewOptions>();
  @Output() onFilterSelect = new EventEmitter<FilterOptions>();

  constructor() { }

  ngOnInit() {
  }

  selectView(view: ViewOptions) {
    this.currentView = view;
    this.onViewSelect.emit(view);
  }

  selectFilter(filter: FilterOptions) {
    this.currentFilter = filter;
    this.onFilterSelect.emit(filter);
  }

}
