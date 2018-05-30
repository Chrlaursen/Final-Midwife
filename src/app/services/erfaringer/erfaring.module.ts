import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ErfaringService } from '../../services/erfaringer/erfaring.service'

import { ErfaringerComponent } from '../../components/erfaringer/erfaringer.component';


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
      ErfaringService
    ]
  })
  export class ErfaringModule { }