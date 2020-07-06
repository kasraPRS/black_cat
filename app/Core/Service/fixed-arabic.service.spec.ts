/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FixArabicService } from './fixed-arabic.service';

describe('Service: FixedArabic', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FixArabicService]
    });
  });

  it('should ...', inject([FixArabicService], (service: FixArabicService) => {
    expect(service).toBeTruthy();
  }));
});
