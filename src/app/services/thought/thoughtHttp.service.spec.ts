import { TestBed } from '@angular/core/testing';

import { ThoughtService } from './thoughtHttp.service';

describe('ThoughtService', () => {
  let service: ThoughtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThoughtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
