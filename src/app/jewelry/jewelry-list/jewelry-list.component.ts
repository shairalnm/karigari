import { Component, OnInit } from '@angular/core';
import { Jewelry } from '../jewelry.model';

@Component({
  selector: 'app-jewelry-list',
  templateUrl: './jewelry-list.component.html',
  styleUrls: ['./jewelry-list.component.css'],
})
export class JewelryListComponent implements OnInit {
  jewelry: Jewelry[] = [
    new Jewelry(
      'A Gold Ring',
      'A beautiful gold ring with leaflets in the edge',
      'https://littletreasury.com/product/simon-g-18k-rose-gold-leaf-design-ring/',
      '1111',
      '4444',
      '4444',
      'Gold',
      '1.113'
    ),
    new Jewelry(
      'A Gold Ring',
      'A beautiful gold ring with leaflets in the edge',
      'https://littletreasury.com/product/simon-g-18k-rose-gold-leaf-design-ring/',
      '1111',
      '4444',
      '4444',
      'Gold',
      '1.113'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
