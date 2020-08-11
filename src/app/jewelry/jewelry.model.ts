import { Item } from '../shared/item.model';
export class Jewelry {
  public name: string;
  public description: string;
  public imagePath: string;
  public item: Item[];
  public goldPricePerGram: string;
  public todayPricePerGram: string;
  public totalPrice: string;
  public metalType: string;
  public weight: string;

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    item: Item[],
    goldPricePerGram: string,
    todayPricePerGram: string,
    totalPrice: string,
    metalType: string,
    weight: string
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.item = item;
    this.goldPricePerGram = goldPricePerGram;
    this.todayPricePerGram = todayPricePerGram;
    this.totalPrice = totalPrice;
    this.metalType = metalType;
    this.weight = weight;
  }
}
