import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Movie, NowPlayingResponse } from '../interfaces/now-playing-response';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl: string = 'https://api.themoviedb.org/3/';
  carteleraPages = 1;
  public cargando: boolean = false;

  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key: 'a2c5b0aa63f4810637029fdd61a1549b',
      lenguage: 'es-ES',
      page: this.carteleraPages.toString(),
    };
  }

  resetCarteleraPage() {
    this.carteleraPages = 1;
  }
  getMovies(): Observable<Movie[]> {
    if (this.cargando) {
      return of([]);
    }

    this.cargando = true;
    console.log('API');
    return this.http
      .get<NowPlayingResponse>(
        `${this.baseUrl}movie/now_playing?api_key=a2c5b0aa63f4810637029fdd61a1549b&language=es-ES&page=1`,
        { params: this.params }
      )
      .pipe(
        map((resp) => resp.results),
        tap(() => {
          this.carteleraPages += 1;
          this.cargando = false;
        })
      );
  }

  buscarPeliculas(text: string): Observable<Movie[]> {
    if (this.cargando) {
      return of([]);
    }
    console.log('texto', text)
    const params = { ...this.params, query:text};
    console.log('params', params)
    //https://api.themoviedb.org/3/search/movie?api_key=a2c5b0aa63f4810637029fdd61a1549b&language=en-US&query=avengers&page=1&include_adult=false
    // https://api.themoviedb.org/3/search/movie
    return this.http
      .get<NowPlayingResponse>(`${this.baseUrl}search/movie`, { params })
      .pipe(
        map((resp) => resp.results),
      );
  }
}
