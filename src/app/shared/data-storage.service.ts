import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Jewelry } from '../jewelry/jewelry.model';
import { JewelryService } from '../jewelry/jewelry.service';
import { ContactService } from '../contact/contact.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private jewelryService: JewelryService,
    private contactService: ContactService
  ) {}

  storeJewelry() {
    const jewelry = this.jewelryService.getJewelrys();
    this.http
      .put('https://karigari-90b30.firebaseio.com/jewelry.json', jewelry)
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchJewelry() {
    return this.http
      .get<Jewelry[]>('https://karigari-90b30.firebaseio.com/jewelry.json')
      .pipe(
        map((jewelry) => {
          return jewelry.map((jewelry) => {
            return {
              ...jewelry,
              item: jewelry.item ? jewelry.item : [],
            };
          });
        }),
        tap((jewelry) => {
          this.jewelryService.setJewelry(jewelry);
          console.log('fetch jewelry' + jewelry);
        })
      );
  }
  storeContact() {
    const contact = this.contactService.getContact();
    this.http
      .put('https://karigari-90b30.firebaseio.com/contact.json', contact)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
