import { Component, OnInit } from '@angular/core';
import { Jewelry } from '../jewelry.model';
import { JewelryService } from '../jewelry.service';

@Component({
  selector: 'app-jewelry-list',
  templateUrl: './jewelry-list.component.html',
  styleUrls: ['./jewelry-list.component.css'],
})
export class JewelryListComponent implements OnInit {
  jewelrys: Jewelry[];
  constructor(private jewelryService: JewelryService) {}

  ngOnInit() {
    console.log('jewelry list called');

    this.jewelrys = this.jewelryService.getJewelrys();
  }
}
