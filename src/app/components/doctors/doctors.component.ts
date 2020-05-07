import {Component, OnInit} from '@angular/core';
import {Doctor} from '../../interfaces/doctor';
import {DoctorService} from '../../services/doctor.service';

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

  doctors: Doctor[];

  constructor(private doctorService: DoctorService) {
  }

  ngOnInit(): void {
    this.doctors = this.doctorService.doctors;
  }
}
