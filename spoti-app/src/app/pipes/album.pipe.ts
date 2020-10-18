import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'album'
})
export class AlbumPipe implements PipeTransform {

  transform(albumUri : string): string {
    let albumId = albumUri.substring(14,albumUri.length);
    return albumId;
  }

}
