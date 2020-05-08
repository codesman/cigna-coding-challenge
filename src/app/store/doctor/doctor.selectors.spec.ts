import * as fromDoctor from './doctor.reducer';
import { selectDoctorState } from './doctor.selectors';
import {Doctor} from '../../interfaces/doctor';
import {DoctorState} from './doctor.reducer';

describe('Doctor Selectors', () => {
  it('should select the feature state', () => {
    const expectedDoctors: DoctorState = {
      doctors: [
        {
          name: 'Foo Bar',
          specialty: 'Fooing and Barring',
        }
      ],
      error: undefined
    };
    expect(selectDoctorState.projector(expectedDoctors)).toEqual(expectedDoctors);
  });
});
