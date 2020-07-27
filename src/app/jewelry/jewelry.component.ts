import { Component, OnInit } from '@angular/core';
import { Jewelry } from './jewelry.model';
import { JewelryService } from './jewelry.service';

@Component({
  selector: 'app-jewelry',
  templateUrl: './jewelry.component.html',
  styleUrls: ['./jewelry.component.css'],
  providers: [JewelryService],
})
export class JewelryComponent implements OnInit {
  selectedJewelry: Jewelry;

  constructor(private jewelryService: JewelryService) {}

  ngOnInit() {
    console.log('jewelry component called');
    this.jewelryService.jewelryChanged.subscribe((jewelry: Jewelry) => {
      this.selectedJewelry = jewelry;
    });
  }
}
