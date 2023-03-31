import { Component, OnInit, Input, AfterViewInit} from '@angular/core';
import { Movie } from 'src/app/interfaces/now-playing-response';
import { Swiper } from 'swiper/bundle'



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() movies: Movie[] | undefined;

  constructor() {}
  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  ngOnInit(): void {
    console.log(this.movies);
  }
}
