import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firebase } from '@firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


import {NotifyService} from './notify.service';

interface User {
  uid: string;
  email: string;

}


@Injectable()
export class AuthService {
  user: Observable<User | null>;
  authState: any = null
  error: any;

  constructor(public afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router,
              private notify: NotifyService) {

    this.user = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      }));
  }

  get authenticated(): boolean {
    return this.authState !== null
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : null
  }


  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

 
 

  private oAuthLogin(provider: any) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.notify.update('Velkommen til Midwifes', 'success');
        this.router.navigate(['/erfaringer']).then();
        return this.updateUserData(credential.user);
      })
      .catch((error) => this.handleError(error) );
  }

  //// Email/Password Auth ////
  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.notify.update('Velkommen til Midwifes', 'success');
        this.router.navigate(['/erfaringer']).then();
        return this.updateUserData(user); // if using firestore
      })
      .catch((error) => this.handleError(error) );
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.notify.update('Velkommen til Midwifes', 'success');
        this.router.navigate(['/erfaringer']).then();
        return this.updateUserData(user); // if using firestore
      })
      .catch((error) => this.handleError(error) );
  }



  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  // If error, console log and notify user
  private handleError(error: Error) {
    this.error = error;
    this.notify.update(error.message, 'error');
  }

  // Sets user data to firestore after succesful login
  private updateUserData(user: User) {

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email || null,
    
     
    };
    return userRef.set(data, {merge:true });
  }

}