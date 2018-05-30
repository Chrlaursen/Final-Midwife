import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { DashboardService } from '../../services/dashboard/dashboard.service'

import { DashboardDetailComponent } from '../../components/dashboard/dashboard-detail/dashboard-detail.component';
import { DashboardListComponent } from '../../components/dashboard/dashboard-list/dashboard-list.component';
import { DashboardProfileComponent } from '../../components/dashboard/dashboard-profile/dashboard-profile.component';

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      AngularFirestoreModule.enablePersistence(),
    ],
    declarations: [
        

    ],
    providers: [
        DashboardService
    ]
  })

  export class DashboardModule { }