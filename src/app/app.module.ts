import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarPageComponent } from './sidebar-page/sidebar-page.component';
import { ExploreComponent } from './explore/explore.component';
import { ExploreSidebarComponent } from './explore-sidebar/explore-sidebar.component';
import { PicturesListComponent } from './pictures-list/pictures-list.component';
import { PicturesService } from './services/pictures.service';
import { FavoritesPipe } from './pipes/favorites.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarPageComponent,
    ExploreComponent,
    ExploreSidebarComponent,
    PicturesListComponent,
    FavoritesPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    PicturesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
