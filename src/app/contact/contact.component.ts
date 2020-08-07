import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ContactService } from '../contact/contact.service';
import { DataStorageService } from '../shared/data-storage.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactUsForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private dataStorageService: DataStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.contactUsForm = new FormGroup({
      message: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
    });
  }
  onSubmit() {
    /* console.log('Contact submitted!!!!'); */
    this.contactService.addContact(this.contactUsForm.value);
    this.dataStorageService.storeContact();

    /*  console.log(this.contactUsForm.value); */
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
