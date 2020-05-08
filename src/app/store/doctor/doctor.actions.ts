import { createAction, props } from '@ngrx/store';
import {Doctor} from '../../interfaces/doctor';

export const loadDoctors = createAction(
  '[Doctor] Load Doctors'
);

export const loadDoctorsSuccess = createAction(
  '[Doctor] Load Doctors Success',
  props<{ doctors: Doctor[] }>()
);

export const loadDoctorsFailure = createAction(
  '[Doctor] Load Doctors Failure',
  props<{ doctors: Doctor[], error: any }>()
);
