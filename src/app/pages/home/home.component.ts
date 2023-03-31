import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/now-playing-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  moviesSlide: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const position =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1200;
    const maxPosition =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    console.log({ position, maxPosition });

    if (position > maxPosition) {
      this.moviesService.getMovies().subscribe((resp) => {
        this.movies.push(...resp.results)
      });
    }
  }

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {

    this.moviesService.getMovies().subscribe((resp) => {
      // console.log(resp);
      this.movies = resp.results;
      this.moviesSlide = resp.results;
    });

  }
}
