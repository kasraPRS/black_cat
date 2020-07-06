/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VotingService } from './voting.service';

describe('Service: Voting', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VotingService]
    });
  });

  it('should ...', inject([VotingService], (service: VotingService) => {
    expect(service).toBeTruthy();
  }));
});
