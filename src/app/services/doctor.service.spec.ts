import {TestBed} from '@angular/core/testing';

import {DoctorService} from './doctor.service';
import {HttpClient} from '@angular/common/http';
import {Doctor} from '../interfaces/doctor';
import {of} from 'rxjs';

describe('DoctorService', () => {
  let doctorService: DoctorService;
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        DoctorService,
        { provide: HttpClient, useValue: spy}
      ]
    });

    doctorService = TestBed.inject(DoctorService);
    httpSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(doctorService).toBeTruthy();
  });

  it('should return a list of doctors', () => {
    const expectedResponse = {
      results: [
        {
          name: 'Foo Bar',
          specialty: 'Fooing and Barring',
        }
      ]
    };

    const expectedDoctors: Doctor[] = [
      {
        name: 'Foo Bar',
        specialty: 'Fooing and Barring',
      }
    ];

    httpSpy.get.and.returnValue(of(expectedResponse));

    doctorService.doctors.subscribe(
      doctors => expect(doctors).toEqual(expectedDoctors), fail
    );

    expect(httpSpy.get.calls.count()).toBe(1, 'one call');
  });
});
