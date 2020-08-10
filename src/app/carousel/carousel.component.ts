import { Component } from '@angular/core';
import { Jewelry } from '../jewelry/jewelry.model';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  jewelry: Jewelry;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
