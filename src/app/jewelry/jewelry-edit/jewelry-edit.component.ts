import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { JewelryService } from '../jewelry.service';

@Component({
  selector: 'app-jewelry-edit',
  templateUrl: './jewelry-edit.component.html',
  styleUrls: ['./jewelry-edit.component.css'],
})
export class JewelryEditComponent implements OnInit {
  id: number;
  editMode = false;
  jewelryForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private jewelryService: JewelryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.jewelryService.updateJewelry(this.id, this.jewelryForm.value);
    } else {
      this.jewelryService.addJewelry(this.jewelryForm.value);
    }
    this.onCancel();
  }

  onAddItem() {
    (<FormArray>this.jewelryForm.get('item')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onDeleteItem(index: number) {
    (<FormArray>this.jewelryForm.get('item')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  get controls() {
    // a getter!
    return (<FormArray>this.jewelryForm.get('item')).controls;
  }

  private initForm() {
    let jewelryName = '';
    let jewelryImagePath = '';
    let jewelryDescription = '';
    let jewelryItem = new FormArray([]);

    if (this.editMode) {
      const jewelry = this.jewelryService.getJewelry(this.id);
      jewelryName = jewelry.name;
      jewelryImagePath = jewelry.imagePath;
      jewelryDescription = jewelry.description;
      if (jewelry['item']) {
        for (let item of jewelry.item) {
          jewelryItem.push(
            new FormGroup({
              name: new FormControl(item.name, Validators.required),
              amount: new FormControl(item.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }

    this.jewelryForm = new FormGroup({
      name: new FormControl(jewelryName, Validators.required),
      imagePath: new FormControl(jewelryImagePath, Validators.required),
      description: new FormControl(jewelryDescription, Validators.required),
      item: jewelryItem,
    });
  }
}
