import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Jewelry } from '../jewelry.model';
import { JewelryService } from '../jewelry.service';

@Component({
  selector: 'app-jewelry-list',
  templateUrl: './jewelry-list.component.html',
  styleUrls: ['./jewelry-list.component.css'],
})
export class JewelryListComponent implements OnInit, OnDestroy {
  jewelrys: Jewelry[];
  subscription: Subscription;

  constructor(
    private jewelryService: JewelryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('jewelry list called');

    /* this.jewelrys = this.jewelryService.getJewelrys(); */
    this.subscription = this.jewelryService.jewelryChanged.subscribe(
      (jewelry: Jewelry[]) => {
        this.jewelrys = jewelry;
      }
    );
    this.jewelrys = this.jewelryService.getJewelrys();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
