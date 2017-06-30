import { TestBed, inject } from '@angular/core/testing';

import { SbhttpService } from './sbhttp.service';

describe('SbhttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SbhttpService]
    });
  });

  it('should be created', inject([SbhttpService], (service: SbhttpService) => {
    expect(service).toBeTruthy();
  }));
});
