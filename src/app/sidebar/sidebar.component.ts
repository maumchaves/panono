import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'panono-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SidebarComponent implements OnInit {

  toggleFlag: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.toggleFlag = !this.toggleFlag;
  }

}