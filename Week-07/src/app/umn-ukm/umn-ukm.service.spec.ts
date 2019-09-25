import { TestBed } from '@angular/core/testing';

import { UmnUkmService } from './umn-ukm.service';

describe('UmnUkmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UmnUkmService = TestBed.get(UmnUkmService);
    expect(service).toBeTruthy();
  });
});
