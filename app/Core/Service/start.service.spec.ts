/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StartService } from './start.service';

describe('Service: Start', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StartService]
    });
  });

  it('should ...', inject([StartService], (service: StartService) => {
    expect(service).toBeTruthy();
  }));
});
