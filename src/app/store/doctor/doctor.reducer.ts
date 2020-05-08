import {Action, createReducer, on, State} from '@ngrx/store';
import * as DoctorActions from './doctor.actions';
import {Doctor} from '../../interfaces/doctor';
import { selectDoctorsList } from './doctor.selectors';

export const doctorFeatureKey = 'doctor';

export interface DoctorState {
  doctors: Doctor[];
  error: any;
}

export const initialState: DoctorState = {
  doctors: undefined,
  error: undefined,
};


export const reducer = createReducer(
  initialState,

  on(DoctorActions.loadDoctorsSuccess, (state, action) => {
    return {
      doctors: action.doctors
    };
  }),
  on(DoctorActions.loadDoctorsFailure, (state, action) => {
    return {
      doctors: state.doctors,
      error: action.error
    };
  })
);

