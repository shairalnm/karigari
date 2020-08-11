import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Jewelry } from '../jewelry.model';
import { JewelryService } from '../jewelry.service';
@Component({
  selector: 'app-jewelry-detail',
  templateUrl: './jewelry-detail.component.html',
  styleUrls: ['./jewelry-detail.component.css'],
})
export class JewelryDetailComponent implements OnInit {
  jewelry: Jewelry;
  id: number;

  constructor(
    private jewelryService: JewelryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.jewelry = this.jewelryService.getJewelry(this.id);
    });
  }
  onAddToShoppingList() {
    this.jewelryService.addItemsToShoppingList(this.jewelry.item);
  }

  onEditJewelry() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteJewelry() {
    this.jewelryService.deleteJewelry(this.id);
    this.router.navigate(['/jewelry']);
  }
}
