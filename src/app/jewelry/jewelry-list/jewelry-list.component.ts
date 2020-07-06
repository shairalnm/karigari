import { Component, OnInit } from '@angular/core';
import { Jewelry } from '../jewelry.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { JewelryService } from '../jewelry.service';

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
      'http://pngimg.com/uploads/ring/ring_PNG38.png',
      '1111',
      '4444',
      '4444',
      'Gold',
      '1.113'
    ),
    new Jewelry(
      'A Gold Ring',
      'A beautiful gold ring with leaflets in the edge',
      'http://pngimg.com/uploads/ring/ring_PNG38.png',
      '1111',
      '4444',
      '4444',
      'Gold',
      '1.113'
    ),
  ];

  subscription: Subscription;

  constructor() /* private jewelryService: JewelryService,
    private router: Router,
    private route: ActivatedRoute */
  {}

  ngOnInit() {
    /* this.subscription = this.jewelryService.jewelryChanged.subscribe(
      (jewelry: Jewelry[]) => {
        this.jewelry = jewelry;
      }
    );
    this.jewelry = this.jewelryService.getJewelrys(); */
    console.log('jewelry list component initialized');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
