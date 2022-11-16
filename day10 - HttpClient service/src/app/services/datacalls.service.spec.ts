import { TestBed } from '@angular/core/testing';

import { DatacallsService } from './datacalls.service';

describe('DatacallsService', () => {
  let service: DatacallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatacallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
