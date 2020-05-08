import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as DoctorActions from './doctor.actions';
import {DoctorService} from '../../services/doctor.service';


@Injectable()
export class DoctorEffects {

  @Effect()
  loadDoctors$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DoctorActions.loadDoctors),
      mergeMap(() =>
        this.doctorService.doctors.pipe(
          map(data => DoctorActions.loadDoctorsSuccess({ doctors: data })),
          catchError(err => of(DoctorActions.loadDoctorsFailure({ doctors: undefined, error: err }))))
      )
    );
  });

  constructor(private actions$: Actions, private doctorService: DoctorService) {}
}
