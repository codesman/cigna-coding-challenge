import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';

import {DoctorEffects} from './doctor.effects';
import {DoctorService} from '../../services/doctor.service';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';

describe('DoctorEffects', () => {
  let actions$: Observable<Action>;
  let effects: DoctorEffects;
  let serviceSpy: jasmine.SpyObj<DoctorService>;
  let doctorService: DoctorService;


  beforeEach(() => {
    const spy = jasmine.createSpyObj('DoctorService', ['doctors']);

    TestBed.configureTestingModule({
      providers: [
        DoctorEffects,
        {provide: DoctorService, useValue: spy},
        provideMockActions(() => actions$)
      ]
    });
    effects = TestBed.inject(DoctorEffects);
    serviceSpy = TestBed.inject(DoctorService) as jasmine.SpyObj<DoctorService>;
    doctorService = TestBed.inject(DoctorService);
  });

  it('should be created', async () => {
    expect(effects).toBeTruthy();
  });
});
