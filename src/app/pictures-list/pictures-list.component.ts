import { Component, OnInit, Input } from '@angular/core';
import { PicturesService } from '../services/pictures.service';
import { Picture } from '../models/picture';

@Component({
  selector: 'panono-pictures-list',
  templateUrl: './pictures-list.component.html',
  styleUrls: ['./pictures-list.component.scss']
})
export class PicturesListComponent implements OnInit {

  list: Picture[] = [];
  nextUrl: string;
  pages: string[] = [];
  @Input() listViewFlag: boolean = false;
  @Input() showFavoritesFlag: boolean = false;

  constructor(private picturesService: PicturesService) { }

  ngOnInit() {
    this.nextPage();
  }

  nextPage() {
    this.pages.push(this.nextUrl);
    this.getPictures(this.nextUrl);
  }

  prevPage() {
    this.pages.pop();
    this.getPictures(this.pages[this.pages.length - 1]);
  }

  getPictures(url: string) {
    this.picturesService.getNext(url)
    .subscribe(data => {
      this.nextUrl = data.next;
      this.list = data.pictures;
    });
  }

  removeFavorite(picture: Picture) {
    this.picturesService.removeFavorite(picture);
    picture.favorite = false;
  }

  setFavorite(picture: Picture) {
    this.picturesService.setFavorite(picture);
    picture.favorite = true;
  }

}
