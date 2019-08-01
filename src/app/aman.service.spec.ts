import { TestBed } from '@angular/core/testing';

import { AmanService } from './aman.service';

describe('AmanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmanService = TestBed.get(AmanService);
    expect(service).toBeTruthy();
  });
});
