import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { NotifyService } from './notify.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireDatabaseModule} from 'angularfire2/database';

@NgModule({
    imports: [
      CommonModule,
      AngularFireAuthModule,
      AngularFirestoreModule,
      AngularFireDatabaseModule
    ],
    providers: [AuthService, NotifyService]
  })
  export class CoreModule { }
  