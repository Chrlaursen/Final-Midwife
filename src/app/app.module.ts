import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app-routes';
import { AngularFireModule } from 'angularfire2';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ErfaringerComponent } from './components/erfaringer/erfaringer.component';

import { EksporterComponent } from './components/eksporter/eksporter.component';
import {LoginComponent} from './components/ui/login/login.component';
import {RegisterComponent} from './components/ui/register/register.component';
import { environment } from '../environments/environment';
import '../polyfills';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule,
  MatTabsModule,
  MatToolbarModule, MatTooltipModule, MatPaginatorModule, MatMenuModule, MatDialogModule, MatSliderModule,
  MatExpansionModule, MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDividerModule,
  MatGridListModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTreeModule,
} from '@angular/material';
import { AngularFireStorageModule } from 'angularfire2/storage';
import {AuthGuard} from './core/auth.guard';
import {CoreModule} from './core/core.module';
import {CdkTableModule} from '@angular/cdk/table';
import { ErfaringService } from '../app/services/erfaringer/erfaring.service';
import { ErfaringModule } from '../app/services/erfaringer/erfaring.module';
import { DashboardService } from './services/dashboard/dashboard.service';
import { DashboardModule } from '../app/services/dashboard/dashboard.module';
import { ToastrModule } from 'ngx-toastr';
import { DashboardDetailComponent } from './components/dashboard/dashboard-detail/dashboard-detail.component';
import { DashboardListComponent } from './components/dashboard/dashboard-list/dashboard-list.component';
import { DashboardProfileComponent } from './components/dashboard/dashboard-profile/dashboard-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ErfaringerComponent, 
    EksporterComponent,
    LoginComponent,
    RegisterComponent,
    DashboardDetailComponent,
    DashboardListComponent,
    DashboardProfileComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    DashboardModule,
    ErfaringModule,
    RouterModule.forRoot(routes),
    AngularFireStorageModule,
    MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatInputModule, MatListModule, MatSidenavModule,
    MatTabsModule,
    MatToolbarModule, MatTooltipModule, MatPaginatorModule, MatMenuModule, MatDialogModule, MatSliderModule,
    MatExpansionModule, MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDividerModule,
    MatGridListModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTreeModule,
    CdkTableModule
  ],
  providers: [
    AuthGuard,
    ErfaringService,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
