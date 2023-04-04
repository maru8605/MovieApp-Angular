import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Cast, CreditsResponse } from 'src/app/interfaces/credits-response';
import { MovieResponse } from 'src/app/interfaces/movie-response';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  public movie: MovieResponse | undefined;
  public cast: Cast[] = [];

  constructor(
    private activatedRouter: ActivatedRoute,
    private moviesService: MoviesService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    combineLatest([
      this.moviesService.getPeliculaDetalle(id),
      this.moviesService.getCast(id),
    ]).subscribe(([pelicula, cast]) => {
      if (!pelicula) {
        this.router.navigateByUrl('/home');
        return;
      }

      this.movie = pelicula;
      this.cast = cast.filter((actor) => actor.profile_path !== null);
    });

  }

  onBack() {
    this.location.back();
  }
}