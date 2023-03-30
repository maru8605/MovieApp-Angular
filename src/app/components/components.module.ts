import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [NavbarComponent, SliderComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, SliderComponent],
})
export class ComponentsModule {}
//recordar exportar el componente si este va a ser usado en otro lugar 