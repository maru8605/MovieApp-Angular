import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import {RatingModule } from 'ng-starrating'
import { PipesModule } from '../pipes/pipes.module';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    PeliculasPosterGridComponent,
    CastSlideshowComponent,
  ],
  imports: [CommonModule, RouterModule, RatingModule, PipesModule],
  exports: [
    NavbarComponent,
    SliderComponent,
    PeliculasPosterGridComponent,
    CastSlideshowComponent,
  ],
})
export class ComponentsModule {}
//recordar exportar el componente si este va a ser usado en otro lugar 