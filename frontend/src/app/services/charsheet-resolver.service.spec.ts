import { TestBed, inject } from '@angular/core/testing';

import { CharsheetResolver } from './charsheet-resolver.service';

describe('CharsheetResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharsheetResolver]
    });
  });

  it('should be created', inject([CharsheetResolver], (service: CharsheetResolver) => {
    expect(service).toBeTruthy();
  }));
});
