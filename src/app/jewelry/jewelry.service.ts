import { Jewelry } from '../jewelry/jewelry.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class JewelryService {
  jewelrySelected = new EventEmitter<Jewelry>();

  private jewelrys: Jewelry[] = [
    new Jewelry(
      'A Test Jewelry',
      'This is simply a test',
      'https://www.brides.com/thmb/v7JjHutc5FJEDYj0KGi7jCKxNIc=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/marquise-3-5bf35a8c7bbd421d8850bf7e0f08322e.jpg'
    ),
    new Jewelry(
      'Another Jewelry',
      'This is simply a test',
      'https://www.brides.com/thmb/v7JjHutc5FJEDYj0KGi7jCKxNIc=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/marquise-3-5bf35a8c7bbd421d8850bf7e0f08322e.jpg'
    ),
  ];
  constructor() {}
  getJewelrys() {
    return this.jewelrys.slice();
    console.log('service called');
  }
}
