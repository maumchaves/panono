import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ViewOptions, FilterOptions } from '../explore-sidebar/explore-sidebar.component';

@Component({
  selector: 'panono-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExploreComponent implements OnInit {

  listViewFlag: boolean = false;
  showFavoritesFlag: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onViewSelect(view: ViewOptions) {
    this.listViewFlag = view === ViewOptions.List;
  }

  onFilterSelect(filter: FilterOptions) {
    this.showFavoritesFlag = filter === FilterOptions.Favorites;
  }

}