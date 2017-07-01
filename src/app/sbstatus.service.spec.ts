import { TestBed, inject } from '@angular/core/testing';

import { SbstatusService } from './sbstatus.service';

describe('SbstatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SbstatusService]
    });
  });

  it('should be created', inject([SbstatusService], (service: SbstatusService) => {
    expect(service).toBeTruthy();
  }));
});
