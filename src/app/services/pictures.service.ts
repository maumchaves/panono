import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Picture, PicturesCollection } from './../models/picture';

@Injectable()
export class PicturesService {

  private apiUrl: string = 'http://api3-dev.panono.com/explore';
  private favorites: string[];

  constructor(private http: HttpClient) {
    this.favorites = localStorage.getItem('favorites').split(',') || [];
  }

  getNext(url: string = this.apiUrl): Observable<PicturesCollection> {
    return this.http.get<PicturesResponse>(url)
    .pipe(map(collection => {
      const pictures: Picture[] = collection.items.map(
        item => 
          new Picture(
            item.id, item.data.images.thumbnails[0].url, item.data.title,
            new Date(item.data.published_at), this.isFavorite(item.id))
        );
      return new PicturesCollection(collection.next, pictures);
    }));
  }

  removeFavorite(picture: Picture) {
    this.favorites.splice(this.favorites.indexOf(picture.id), 1);
    localStorage.setItem('favorites', this.favorites.toString());
  }

  setFavorite(picture: Picture) {
    this.favorites.push(picture.id);
    localStorage.setItem('favorites', this.favorites.toString());
  }

  private isFavorite(id: string) {
    return this.favorites.find((favoriteId) => favoriteId == id) === undefined
      ? false : true;
  }

}

class PicturesResponse {
  next: string;
  items: {
    id: string,
    data: {
      images: {
        thumbnails: {
          width: number,
          url: string
        }[]
      },
      title: string,
      published_at: Date
    };
  }[]
}
