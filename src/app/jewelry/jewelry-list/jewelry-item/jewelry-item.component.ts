import { Component, OnInit,Input } from '@angular/core';
import { Jewelry } from '../../jewelry.model';

@Component({
  selector: 'app-jewelry-item',
  templateUrl: './jewelry-item.component.html',
  styleUrls: ['./jewelry-item.component.css']
})
export class JewelryItemComponent implements OnInit {
  @Input() jewelry: Jewelry;
  @Input() index: number;

  constructor() { }

  ngOnInit(){
  }

}