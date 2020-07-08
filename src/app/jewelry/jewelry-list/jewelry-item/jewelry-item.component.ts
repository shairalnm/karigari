import { Component, OnInit, Input } from '@angular/core';
import { Jewelry } from '../../jewelry.model';
import { JewelryService } from '../../jewelry.service';

@Component({
  selector: 'app-jewelry-item',
  templateUrl: './jewelry-item.component.html',
  styleUrls: ['./jewelry-item.component.css'],
})
export class JewelryItemComponent implements OnInit {
  @Input() jewelry: Jewelry;

  constructor(private jewelryService: JewelryService) {}

  ngOnInit() {
    console.log('jewelry item called');
  }
  onSelected() {
    this.jewelryService.jewelrySelected.emit(this.jewelry);
  }
}
