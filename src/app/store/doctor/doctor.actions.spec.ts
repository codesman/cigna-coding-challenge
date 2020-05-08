import * as fromDoctor from './doctor.actions';

describe('loadDoctors', () => {
  it('should return an action', () => {
    expect(fromDoctor.loadDoctors().type).toBe('[Doctor] Load Doctors');
  });
});

describe('loadDoctorsSuccess', () => {
  it('should return an action', () => {
    expect(fromDoctor.loadDoctorsSuccess({
      doctors: []
    }).type).toBe('[Doctor] Load Doctors Success');
  });
});

describe('loadDoctorsFailure', () => {
  it('should return an action', () => {
    expect(fromDoctor.loadDoctorsFailure({
      doctors: undefined,
      error: 'foo'
    }).type).toBe('[Doctor] Load Doctors Failure');
  });
});
