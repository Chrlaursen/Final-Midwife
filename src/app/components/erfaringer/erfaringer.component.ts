import { Component, OnInit, Input } from '@angular/core';
import { ErfaringService } from '../../services/erfaringer/erfaring.service';
import { Observable } from 'rxjs';
import { ErfaringModule } from '../../services/erfaringer/erfaring.module';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

import { AuthService } from '../../core/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
@Component({
  selector: 'app-erfaringer',
  templateUrl: './erfaringer.component.html',
  styleUrls: ['./erfaringer.component.css']
})



export class ErfaringerComponent implements OnInit {
 

  experiences;
  user;

  constructor(
    private afs: AngularFirestore, 
    public auth: AuthService,
    private erfaringService: ErfaringService, 
    private router: ActivatedRoute,
     public snackBar: MatSnackBar) { 
      this.auth.afAuth.authState.subscribe(res => {
        if (res && res.uid) {
          console.log('user is logged in');
        } else {
          console.log('user not logged in');
        }
      });
    }



  ngOnInit() {
    
    this.experiences = this.erfaringService.getSnapshot();
    
  }

  openSnackbar() {
    this.snackBar.open("Erfaring tilføjet!", "Ok!", {
      duration: 2000
    });
   

    

  }


}
