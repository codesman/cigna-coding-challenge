import {Component, OnInit} from '@angular/core';
import {Doctor} from '../../interfaces/doctor';
import {DoctorService} from '../../services/doctor.service';
import {Observable, Observer, of} from 'rxjs';
import {DoctorState} from '../../store/doctor/doctor.reducer';
import {select, Store} from '@ngrx/store';
import * as DoctorActions from '../../store/doctor/doctor.actions'  ;
import {selectDoctorsList} from '../../store/doctor/doctor.selectors';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
  providers: [ DoctorService ]
})

export class DoctorsComponent implements OnInit {
  title = `Doctor's Hall of Fame`;

  tableHeaders = {
    name: 'Name',
    specialty: 'Specialty',
  };

  doctors$: Observable<Doctor[]>;

  constructor(
    private store: Store<DoctorState>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(DoctorActions.loadDoctors());
    this.loadDoctors();
  }

  loadDoctors() {
    this.doctors$ = this.store.pipe(select(selectDoctorsList));
  }
}
