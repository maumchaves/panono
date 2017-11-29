import { Component, OnInit, ViewEncapsulation, TemplateRef, ContentChild, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'panono-sidebar-page',
  templateUrl: './sidebar-page.component.html',
  styleUrls: ['./sidebar-page.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SidebarPageComponent implements OnInit {

  @ViewChild('sidebar') sidebar: SidebarComponent;
  @ContentChild('sidebarContent') sidebarContentTemplate: TemplateRef<any>;
  @ContentChild('pageContent') pageContentTemplate: TemplateRef<any>;

  toggleFlag: boolean;

  constructor() {
    this.toggleFlag = window.innerWidth >= 578;
  }

  ngOnInit() {
    if(this.toggleFlag) {
      this.sidebar.toggle();
    }
  }

  toggle = () => {
    this.toggleFlag = !this.toggleFlag;
    this.sidebar.toggle();
  }

}
