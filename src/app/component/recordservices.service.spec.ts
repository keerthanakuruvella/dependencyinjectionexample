import { TestBed } from '@angular/core/testing';

import { RecordservicesService } from './recordservices.service';

describe('RecordservicesService', () => {
  let service: RecordservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
