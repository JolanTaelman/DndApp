import { TestBed, inject } from '@angular/core/testing';

import { SheetDataServiceService } from './sheet-data-service.service';

describe('SheetDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SheetDataServiceService]
    });
  });

  it('should be created', inject([SheetDataServiceService], (service: SheetDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
