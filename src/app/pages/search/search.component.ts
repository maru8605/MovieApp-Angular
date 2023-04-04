import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from 'src/app/interfaces/now-playing-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  texto: string = '';
  public movies: Movie[] = [];



  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log('parametro', params['text']);
      this.texto = params['text'];

      this.moviesService.buscarPeliculas(params['text']).subscribe((movies) => {
        console.log('moviesComponent', movies);
        this.movies = movies;
      });
    });
  }
}
