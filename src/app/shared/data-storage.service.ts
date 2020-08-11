import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Jewelry } from '../jewelry/jewelry.model';
import { JewelryService } from '../jewelry/jewelry.service';
import { ContactService } from '../contact/contact.service';
import { environment } from '../../environments/environment';

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
      .put(environment.firebaseJewelryDatabaseLink, jewelry)
      .subscribe((response) => {});
  }

  fetchJewelry() {
    return this.http
      .get<Jewelry[]>(environment.firebaseJewelryDatabaseLink)
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
        })
      );
  }
  storeContact() {
    const contact = this.contactService.getContact();
    this.http
      .put(environment.firebaseContactDatabaseLink, contact)
      .subscribe((response) => {});
  }
}
