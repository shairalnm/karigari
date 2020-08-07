import { Item } from '../shared/item.model';
import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class ShoppingListService {
  itemChanged = new Subject<Item[]>();
  startedEditing = new Subject<number>();
  private item: Item[] = [
    new Item('Rings', 5),
    new Item('Piercings', 10),
  ];

  getItems() {
    return this.item.slice();
  }

  getItem(index: number) {
    return this.item[index];
  }

  addItem(item: Item) {
    this.item.push(item);
    this.itemChanged.next(this.item.slice());
  }

  addItems(item: Item[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.item.push(...item);
    this.itemChanged.next(this.item.slice());
  }

  updateItems(index: number, newItem: Item) {
    this.item[index] = newItem;
    this.itemChanged.next(this.item.slice());
  }

  deleteItems(index: number) {
    this.item.splice(index, 1);
    this.itemChanged.next(this.item.slice());
  }
}
