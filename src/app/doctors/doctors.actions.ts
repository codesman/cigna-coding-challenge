import {createAction, props} from '@ngrx/store';
import {Doctor} from '../interfaces/doctor';

export const hydrateDoctors = createAction(
  '[Doctors] Hydrate',
  props<{ tableHeaders: object, doctors: Doctor[] }>()
);
