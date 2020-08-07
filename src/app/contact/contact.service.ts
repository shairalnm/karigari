import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Contact } from './contact.model';

@Injectable()
export class ContactService {
  contactChanged = new Subject<Contact[]>();

  /*  private contact: Contact[] = [
    new Contact('abc', 'abc@email.com', 'abc wants to write a message'),
  ]; */
  private contact: Contact[] = [];

  getContact() {
    return this.contact.slice();
  }
  addContact(contact: Contact) {
    this.contactChanged.next(this.contact.slice());
    this.contact.push(contact);
  }
}
