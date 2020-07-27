import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Jewelry } from '../jewelry/jewelry.model';
import { JewelryService } from '../jewelry/jewelry.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private jewelryService: JewelryService
  ) {}

  storeJewelrys() {
    const jewelry = this.jewelryService.getJewelrys();

    this.http
      .put('https://karigari-90b30.firebaseio.com/jewelry.json', jewelry)
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchjewelrys() {
    /* return this.http
      .get<Jewelry[]>('https://karigari-90b30.firebaseio.com/jewelry.json')
      .pipe(
        map((jewelry) => {
          return jewelry.map((jewelry) => {
            return {
              ...jewelry,
            };
          });
        })
        /* tap((jewelry) => {
          this.jewelryService.setJewelry(jewelry);
        }) */
  }
}
