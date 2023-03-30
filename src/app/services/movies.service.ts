import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NowPlayingResponse } from '../interfaces/now-playing-response';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<NowPlayingResponse> {
    return this.http.get<NowPlayingResponse>(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=a2c5b0aa63f4810637029fdd61a1549b&language=es-ES&page=1'
    );
  }
}
