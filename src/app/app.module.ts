import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfilComponent } from './driver/profil/profil.component';

import {RouterModule, Routes} from '@angular/router';
import { ProfilclientComponent } from './client/profilclient/profilclient.component';
import { LoginclientComponent } from './client/loginclient/loginclient.component';
import { RegisterclientComponent } from './client/registerclient/registerclient.component';
import { RegisterComponent } from './driver/register/register.component';
import { LoginComponent } from './driver/login/login.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {MzButtonModule, MzDatepickerModule, MzIconMdiModule, MzInputModule, MzTimepickerModule} from 'ngx-materialize';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MzValidationModule } from 'ngx-materialize';



const routerconfig: Routes = [
  {path: '' , component: HomeComponent },
  {path: 'driver' , component: ProfilComponent,
    children : [
      {
        path: 'profil',
        component: ProfilComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
    ]


  },
  // {path: 'client' , component: ProfilclientComponent,
  //   children: [
  //     {
  //       path: 'login',
  //       component: LoginclientComponent
  //     },
  //     {
  //       path: 'register',
  //       component: RegisterclientComponent
  //     },
  //   ]
  //
  //
  // },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilComponent,
    ProfilclientComponent,
    LoginclientComponent,
    RegisterclientComponent,
    RegisterComponent,
    LoginComponent
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
    MzIconMdiModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
