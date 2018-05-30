import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { DashboardService } from '../../../services/dashboard/dashboard.service';
import { AuthService } from '../../../core/auth.service';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {
  
  dashboards;
  constructor(private afs: AngularFirestore, private dashboardService: DashboardService, public auth: AuthService,  private router: ActivatedRoute,
    public snackBar: MatSnackBar)  { 
    this.auth.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        console.log('user is logged in');
      } else {
        console.log('user not logged in');
      }
    });
  }


  ngOnInit( ) {
    this.dashboards = this.dashboardService.getSnapshot()
    console.log(this.dashboardService)
  }

  delete(id: string) {
    this.dashboardService.delete(id)
  }


}
