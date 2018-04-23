import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCharsheetComponent } from './add-charsheet.component';

describe('AddCharsheetComponent', () => {
  let component: AddCharsheetComponent;
  let fixture: ComponentFixture<AddCharsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCharsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCharsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
