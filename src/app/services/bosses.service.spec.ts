import { TestBed } from '@angular/core/testing';

import { BossesService } from './bosses.service';

describe('BossesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BossesService = TestBed.get(BossesService);
    expect(service).toBeTruthy();
  });
});
