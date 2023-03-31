import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import {RatingModule } from 'ng-starrating'


@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    PeliculasPosterGridComponent,
  ],
  imports: [CommonModule, RouterModule, RatingModule],
  exports: [NavbarComponent, SliderComponent, PeliculasPosterGridComponent],
})
export class ComponentsModule {}
//recordar exportar el componente si este va a ser usado en otro lugar 