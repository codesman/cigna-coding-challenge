import {Injectable, Output} from '@angular/core';
import * as data from '../../assets/data.json';
import {Doctor} from '../interfaces/doctor';

@Injectable({
  providedIn: 'root'
})

export class DoctorService {
  constructor() {}

  @Output()
  get doctors(): Doctor[] {
    return data.results;
  }
}
