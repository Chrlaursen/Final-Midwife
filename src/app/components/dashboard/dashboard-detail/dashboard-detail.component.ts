import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../../services/dashboard/dashboard.service';
import { AuthService } from '../../../core/auth.service';

import { Observable } from '@firebase/util';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.css']

})
export class DashboardDetailComponent implements OnInit {
  dashboard;
  editing: boolean = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dashboardService: DashboardService,
    public auth: AuthService
  )  { 
    this.auth.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        console.log('user is logged in');
      } else {
        console.log('user not logged in');
      }
    });
  }


  ngOnInit() {
   
  }

  

  updateDashboard() {
    const formData = {
      title: this.dashboard.title,
      content: this.dashboard.content
    }
    const id = this.route.snapshot.paramMap.get('id')
    this.dashboardService.update(id, formData)
    this.editing = false
  }

  delete() {
    const id = this.route.snapshot.paramMap.get('id')
    this.dashboardService.delete(id)
    this.router.navigate(['/blog'])
  }
}
