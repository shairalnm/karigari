import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelryEditComponent } from './jewelry-edit.component';

describe('JewelryEditComponent', () => {
  let component: JewelryEditComponent;
  let fixture: ComponentFixture<JewelryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewelryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
