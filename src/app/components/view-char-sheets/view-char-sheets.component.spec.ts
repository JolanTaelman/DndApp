import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCharSheetsComponent } from './view-char-sheets.component';

describe('ViewCharSheetsComponent', () => {
  let component: ViewCharSheetsComponent;
  let fixture: ComponentFixture<ViewCharSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCharSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCharSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
