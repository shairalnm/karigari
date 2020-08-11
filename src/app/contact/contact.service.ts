import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Contact } from './contact.model';

@Injectable()
export class ContactService {
  contactChanged = new Subject<Contact[]>();

  private contact: Contact[] = [];

  getContact() {
    return this.contact.slice();
  }
  addContact(contact: Contact) {
    this.contact.push(contact);
    this.contactChanged.next(this.contact.slice());
  }
}
