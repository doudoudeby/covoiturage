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


const routerconfig: Routes = [
  {path: '' , component: HomeComponent },
  {path: 'driver' , component: ProfilComponent},
  {path: 'client' , component: ProfilclientComponent},
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
    RouterModule.forRoot(routerconfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
