import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import {RouterModule, Routes} from '@angular/router';

import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {
  MzButtonModule,
  MzDatepickerModule,
  MzDropdownModule,
  MzIconMdiModule,
  MzInputModule,
  MzModalModule,
  MzTimepickerModule
} from 'ngx-materialize';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MzValidationModule } from 'ngx-materialize';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { HeadersComponent } from './pages/headers/headers.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DriverComponent } from './pages/driver/driver.component';



const routerconfig: Routes = [

  {
    path: 'home', component: HomeComponent,
    // data : {title : 'Faire une réservation' }
  },
  {
    path: 'profile' , component: ProfileComponent,
     // data: { title: 'Modifier Mon Profile' }
  },
  {
    path: 'service' , component: DriverComponent,
    // data: { title: 'Proposer un trajet' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadersComponent,
    ProfileComponent,
    DriverComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule.forRoot(routerconfig),
    MzButtonModule,
    MzInputModule,
    MzDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
    MzValidationModule,
    MzTimepickerModule,
    MzIconMdiModule,
    MzModalModule,
    MzDropdownModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule //


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
