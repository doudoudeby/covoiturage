import {Component, Input, OnInit} from '@angular/core';
import {auth} from 'firebase';
import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  @Input() titre: string ;


  constructor(public afAuth: AngularFireAuth , private route: Router) { }

  ngOnInit() {
  }


  google() {

    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
      (user) => {

        console.log('sign with popup', user);
        this.route.navigate(['/']);

        if (user) {
          firebase.database().ref('users/' + user.user.uid ).set({
            username : user.user.displayName,
            email : user.user.email
          });
        }

      }
    ).catch(
      (error) => console.log(error)
    );
  }


  phoneNumber() {

    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    const phoneNumber = '+22547251474';
    const appVerifier = recaptchaVerifier;


    this.afAuth.auth.signInWithPhoneNumber(phoneNumber , appVerifier ).then(
      (success) => {
        console.log(success);
      }
    ).catch(
      error => console.log(error)
    );

  }




  logout() {
    this.afAuth.auth.signOut();

  }


}
