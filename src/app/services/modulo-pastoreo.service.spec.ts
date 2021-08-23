import { TestBed } from '@angular/core/testing';

import { ModuloPastoreoService } from './modulo-pastoreo.service';

describe('ModuloPastoreoService', () => {
  let service: ModuloPastoreoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuloPastoreoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
