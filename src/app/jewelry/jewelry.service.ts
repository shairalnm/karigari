import { Jewelry } from '../jewelry/jewelry.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class JewelryService {
  jewelryChanged = new Subject<Jewelry[]>();

  private jewelrys: Jewelry[] = [];
  /* private jewelrys: Jewelry[] = [
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
  ]; */
  constructor() {}
  getJewelrys() {
    return this.jewelrys.slice();
    console.log('service called');
  }

  setJewelrys(jewelrys: Jewelry[]) {
    this.jewelrys = jewelrys;
    this.jewelryChanged.next(this.jewelrys.slice());
  }
  getJewelry(index: number) {
    return this.jewelrys[index];
  }
}
