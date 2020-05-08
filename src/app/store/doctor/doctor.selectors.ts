import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromDoctor from './doctor.reducer';
import {DoctorState} from './doctor.reducer';
import {Doctor} from '../../interfaces/doctor';

export const selectDoctorState = createFeatureSelector<DoctorState>(
  fromDoctor.doctorFeatureKey
);

export const selectDoctorsList = createSelector(
  selectDoctorState,
  (state: DoctorState) => state.doctors
);
2
