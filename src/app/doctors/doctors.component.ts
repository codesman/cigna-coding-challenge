import {Component, OnInit} from '@angular/core';
import {Doctor} from '../interfaces/doctor';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  title = `Doctor's Hall of Fame`;

  tableHeaders = {
    name: 'Name',
    specialty: 'Specialty',
  };

  doctors: Doctor[] = [
    {
      id: 1,
      name: 'Louis Pasteur',
      specialty: 'Molecular Biology',
    },
    {
      id: 2,
      name: 'Dr. Jean-Martin Charcot',
      specialty: 'Pathology',
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
