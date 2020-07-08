import { Component, OnInit, Input } from '@angular/core';
import { Jewelry } from '../jewelry.model';
import { JewelryService } from '../jewelry.service';

@Component({
  selector: 'app-jewelry-detail',
  templateUrl: './jewelry-detail.component.html',
  styleUrls: ['./jewelry-detail.component.css'],
})
export class JewelryDetailComponent implements OnInit {
  @Input() jewelry: Jewelry;
  constructor(private jewelryService: JewelryService) {}

  ngOnInit() {
    console.log('jewelry details called');
  }

  /* onAddToShoppingList() {
    console.log('added to shopping list');
  } */
}
