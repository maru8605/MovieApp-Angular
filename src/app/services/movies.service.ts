import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { NowPlayingResponse } from '../interfaces/now-playing-response';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl: string = 'https://api.themoviedb.org/3/';
  carteleraPages = 1;
  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key: 'a2c5b0aa63f4810637029fdd61a1549b',
      lenguage: 'es-ES',
      page : this.carteleraPages.toString()
    };
  }

  getMovies(): Observable<NowPlayingResponse> {
    return this.http.get<NowPlayingResponse>(
      `${this.baseUrl}movie/now_playing?api_key=a2c5b0aa63f4810637029fdd61a1549b&language=es-ES&page=1`, {params: this.params}
    ).pipe(
      tap(() => {
        this.carteleraPages += 1;
      })
    )
  }
}
