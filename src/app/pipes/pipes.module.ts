import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterPipe } from './poster.pipe';
import { CastPipe } from './cast.pipe';



@NgModule({
  declarations: [PosterPipe, CastPipe],
  imports: [CommonModule],
  exports: [PosterPipe, CastPipe],
})
export class PipesModule {}
