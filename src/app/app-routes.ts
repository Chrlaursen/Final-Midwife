import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ErfaringerComponent } from './components/erfaringer/erfaringer.component';

import { EksporterComponent } from './components/eksporter/eksporter.component';
import {LoginComponent} from './components/ui/login/login.component';
import {RegisterComponent} from './components/ui/register/register.component';
import {AuthGuard} from './core/auth.guard';
import {DashboardProfileComponent } from './components/dashboard/dashboard-profile/dashboard-profile.component';
import {DashboardDetailComponent } from './components/dashboard/dashboard-detail/dashboard-detail.component';
import {DashboardListComponent } from './components/dashboard/dashboard-list/dashboard-list.component';

export const routes: Routes = [
  
    { path: '', component: ErfaringerComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'erfaringer', component: ErfaringerComponent, canActivate: [AuthGuard]},
    { path: 'overblik', component: DashboardProfileComponent,  canActivate: [AuthGuard]}, 
    { path: 'eksporter', component: EksporterComponent, canActivate: [AuthGuard] },
   
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
  ];