import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'covoiturage';


  constructor(public afAuth: AngularFireAuth , private route: Router){


  }


  ngOnInit() {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user state changed' , user );
        // User is signed in.
        const displayName = user.displayName;
        const email = user.email;
        const emailVerified = user.emailVerified;
        const photoURL = user.photoURL;
        const isAnonymous = user.isAnonymous;
        const uid = user.uid;
        const providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        // ...
      }
    });
  }

}


