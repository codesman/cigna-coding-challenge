import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {DoctorsComponent} from './components/doctors/doctors.component';
import * as fromDoctorState from './store/doctor/doctor.reducer';
import {DoctorEffects} from './store/doctor/doctor.effects';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    EffectsModule.forRoot([]),
    HttpClientModule,
    StoreModule.forRoot([]),
    StoreModule.forFeature(
      fromDoctorState.doctorFeatureKey,
      fromDoctorState.reducer
    ),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([DoctorEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
