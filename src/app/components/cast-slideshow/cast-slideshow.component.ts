import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-response';
import { Swiper } from 'swiper/bundle';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {

  @Input() cast: Cast[] | undefined
  constructor() { }

  ngOnInit(): void {
    console.log(this.cast)
  }

  ngAfterViewInit(): void {
    console.log('swipper')
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
      spaceBetween: 30,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    console.log(swiper)
  }

}
