import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DoctorsComponent} from './components/doctors/doctors.component';
import {DoctorService} from './services/doctor.service';
import {HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
