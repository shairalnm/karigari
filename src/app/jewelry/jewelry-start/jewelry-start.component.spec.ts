import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelryStartComponent } from './jewelry-start.component';

describe('JewelryStartComponent', () => {
  let component: JewelryStartComponent;
  let fixture: ComponentFixture<JewelryStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewelryStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelryStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
