import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore"
import { Observable } from "rxjs";

import { take, tap, map } from 'rxjs/operators';



interface Dashboard {

  id?: string
  title: string;
  category: string;
  content: string;
  description: string;
  createdat: Date;
  uid: string; 

}



@Injectable()
export class DashboardService {
  dashboardsCollection: AngularFirestoreCollection<Dashboard>
  dashboardDoc: AngularFirestoreDocument<Dashboard>

  constructor(private afs: AngularFirestore) {
    this.dashboardsCollection = this.afs.collection('dashboard', ref =>
      ref.orderBy('published', 'desc')
    )
  }

  getDashboardData(): Observable<Dashboard[]> {
    return this.dashboardsCollection.valueChanges();
  
  }
  
  
  
  getSnapshot() {
  // ['added', 'modified', 'removed']
  return this.dashboardsCollection.snapshotChanges().pipe(map(actions => {
  return actions.map(a => {
    return { id: a.payload.doc.id, ...a.payload.doc.data() }
  })
  }))
  }
  
  getDashboard(id) {
  return this.afs.doc<Dashboard>('dashboard/' + id);
  }
  
  

  create(data: Dashboard) {
    this.dashboardsCollection.add(data)
  }

  delete(id: string) {
    return this.getDashboard(id).delete()
  }

  update(id: string, formData) {
    return this.getDashboard(id).update(formData)
  }
}

