import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactUsForm: FormGroup;
  constructor() {}

  ngOnInit(){
    this.contactUsForm = new FormGroup({
      message: new FormControl(),
      name:new FormControl(),
      email:new FormControl(),
   });
  }
  onSubmit() {
    console.log('submitted!!!!');
  }
}
