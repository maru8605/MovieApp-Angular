import { Component, OnInit, Input , AfterContentInit} from '@angular/core';
import { Movie } from 'src/app/interfaces/now-playing-response';
import { Swiper } from 'swiper'
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, AfterContentInit {
  @Input() movies: Movie[] | undefined;

  constructor() {}
  ngAfterContentInit(): void {
    const swiper = new Swiper('.swiper', {
      loop: true,
      direction: 'horizontal'
    });
  }

  ngOnInit(): void {
    console.log(this.movies)
  }
}
