import { TestBed } from '@angular/core/testing';

import { PersonsApiAdapterService } from './persons-api-adapter.service';

describe('PersonsApiAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonsApiAdapterService = TestBed.get(PersonsApiAdapterService);
    expect(service).toBeTruthy();
  });
});
