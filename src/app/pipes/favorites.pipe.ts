import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'favorites', pure: false })
export class FavoritesPipe implements PipeTransform {

  transform(items: { favorite: boolean }[], enabled: boolean = true): any {
    if(!enabled) return items;
    return items.filter(item => item.favorite);
  }

}