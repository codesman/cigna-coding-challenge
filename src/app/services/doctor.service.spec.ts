import {TestBed} from '@angular/core/testing';

import {DoctorService} from './doctor.service';
import ArrayContaining = jasmine.ArrayContaining;

describe('DoctorService', () => {
  let service: DoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 7 doctors', () => {
    const actual = service.doctors;
    expect(actual.length).toEqual(7);
  });
});
