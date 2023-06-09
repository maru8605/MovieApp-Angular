import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/now-playing-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  moviesSlide: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const position =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1200;
    const maxPosition =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    if (position > maxPosition) {
      if (this.moviesService.cargando) { return }
      
      this.moviesService.getMovies().subscribe((movies) => {
        this.movies.push(...movies)
      });
    }
  }

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {

    this.moviesService.getMovies().subscribe((movies) => {

      this.movies = movies;
      this.moviesSlide = movies;
    });

  }

  ngOnDestroy() {
    this.moviesService.resetCarteleraPage()
  }
}
