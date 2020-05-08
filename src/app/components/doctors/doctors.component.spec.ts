import {TestBed} from '@angular/core/testing';
import {DoctorsComponent} from './doctors.component';
import {Store} from '@ngrx/store';
import {provideMockStore} from '@ngrx/store/testing';

describe('DoctorsComponent', () => {
  let doctorsComponent: DoctorsComponent;
  let storeSpy: jasmine.SpyObj<Store>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('Store', ['dispatch']);

    TestBed.configureTestingModule({
      providers: [
        DoctorsComponent,
        {provide: Store, useValue: spy},
      ]
    });

    doctorsComponent = TestBed.inject(DoctorsComponent);
    storeSpy = TestBed.inject(Store) as jasmine.SpyObj<Store>;
  });

  it('should create', () => {
    expect(doctorsComponent).toBeTruthy();
  });

  it('should have a title property', () => {
    expect(doctorsComponent.title).toEqual(`Doctor's Hall of Fame`);
  });

  it('should have a tableHeaders property', () => {
    expect(doctorsComponent.tableHeaders.name).toBeTruthy();
    expect(doctorsComponent.tableHeaders.specialty).toBeTruthy();
  });
});
