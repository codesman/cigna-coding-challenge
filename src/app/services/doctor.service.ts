import {Injectable, Output} from '@angular/core';
import { map } from 'rxjs/operators';
import {Doctor} from '../interfaces/doctor';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

interface Payload {
  results: Doctor[];
}

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  constructor(private http: HttpClient) {}

  @Output()
  get doctors(): Observable<Doctor[]> {
    return this.http.get<Payload>('assets/data.json').pipe(
      map( res => res.results as Doctor[])
    );
  }
}
