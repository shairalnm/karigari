import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Jewelry } from './jewelry.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Item } from "../shared/item.model";

@Injectable()
export class JewelryService {
  jewelryChanged = new Subject<Jewelry[]>();

   private jewelry: Jewelry[] = [
     new Jewelry(
       'Ring',
       'A super-shiny silver ring - just awesome!',
       'https://www.doamore.com/wp-content/uploads/2017/03/engraved-engagement-ring.jpg',
       [new Item('Ring', 1), new Item('Necklace', 20)]
     ),
     new Jewelry(
       'Big Ring',
       'What else you need to say?',
       'https://www.doamore.com/wp-content/uploads/2017/03/engraved-engagement-ring.jpg',
       [new Item('Ring', 2), new Item('Nose Ring', 1)]
     )
   ];
  /* private jewelry: Jewelry[] = []; */

  constructor(private slService: ShoppingListService) {}

  setJewelry(jewelry: Jewelry[]) {
    this.jewelry = jewelry;
    this.jewelryChanged.next(this.jewelry.slice());
  }

  getJewelrys() {
    return this.jewelry.slice();
  }

  getJewelry(index: number) {
    return this.jewelry[index];
  }

  addItemsToShoppingList(items: Item[]) {
    this.slService.addItems(items);
  }

  addJewelry(jewelry: Jewelry) {
    this.jewelry.push(jewelry);
    this.jewelryChanged.next(this.jewelry.slice());
  }

  updateJewelry(index: number, newJewelry: Jewelry) {
    this.jewelry[index] = newJewelry;
    this.jewelryChanged.next(this.jewelry.slice());
  }

  deleteJewelry(index: number) {
    this.jewelry.splice(index, 1);
    this.jewelryChanged.next(this.jewelry.slice());
  }
}
