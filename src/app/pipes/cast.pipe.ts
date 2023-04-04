import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cast',
})
export class CastPipe implements PipeTransform {
  transform(cast: string): string {
    //https://image.tmdb.org/t/p/w138_and_h175_face/gLkLCsQdwDDPabRhKPB25nGtKwS.jpg
    if (cast) {
      return `https://image.tmdb.org/t/p/w138_and_h175_face/${cast}`;
    } else {
      return './assets/no-image.jpg';
    }
  }
}
