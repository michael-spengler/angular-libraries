import { TestBed } from '@angular/core/testing';

import { NoDissuasionWithoutContactService } from './no-dissuasion-without-contact.service';

describe('NoDissuasionWithoutContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoDissuasionWithoutContactService = TestBed.get(NoDissuasionWithoutContactService);
    expect(service).toBeTruthy();
  });
});
