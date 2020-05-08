import { reducer, initialState } from './doctor.reducer';
import * as DoctorsActions from './doctor.actions';
import {Doctor} from '../../interfaces/doctor';

describe('Doctor Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('DoctorActions.loadDoctors', () => {
    it('should return the list of doctors', () => {
      const action = DoctorsActions.loadDoctors;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('DoctorActions.loadDoctorsSuccess', () => {
    it('should return the list of doctors', () => {
      const action = DoctorsActions.loadDoctors;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
