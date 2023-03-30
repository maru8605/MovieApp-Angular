import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/now-playing-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private moviesService : MoviesService) { }

  ngOnInit(): void {

    this.moviesService.getMovies().subscribe((resp) => {
      // console.log(resp);
      this.movies = resp.results;
    });
  }

}
