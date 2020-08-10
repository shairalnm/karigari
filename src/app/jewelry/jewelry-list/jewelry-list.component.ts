import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { Jewelry } from '../jewelry.model';
import { JewelryService } from '../jewelry.service';

@Component({
  selector: 'app-jewelry-list',
  templateUrl: './jewelry-list.component.html',
  styleUrls: ['./jewelry-list.component.css'],
})
export class JewelryListComponent implements OnInit {
  jewelry: Jewelry[];
  subscription: Subscription;

  constructor(
    private jewelryService: JewelryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.jewelryService.jewelryChanged.subscribe(
      (jewelry: Jewelry[]) => {
        this.jewelry = jewelry;
      }
    );
    this.jewelry = this.jewelryService.getJewelrys();
  }

  onNewJewelry() {
    console.log('new jewelry button clicked');

    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
