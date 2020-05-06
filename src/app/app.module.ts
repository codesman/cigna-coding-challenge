import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DoctorsComponent} from './doctors/doctors.component';
import {DoctorService} from './services/doctor.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
