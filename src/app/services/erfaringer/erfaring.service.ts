import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '@firebase/auth-types';

interface Experience {
    title: string;
    kategori: string;
    description?: string;
    id?: any;
    
    
  }

 
  

  @Injectable()
export class ErfaringService {


    experiencesCollection: AngularFirestoreCollection<Experience>;
    experienceDocument:   AngularFirestoreDocument<Experience>


    constructor(private afs: AngularFirestore) {
      this. experiencesCollection = this.afs.collection('experience', ref => ref.orderBy('title') )
      // this.noteDocument = this.afs.doc('experience/mtp1Ll6caN4dVrhg8fWD');
     
    }
     
    getData(): Observable<Experience[]> {
        return this.experiencesCollection.valueChanges();
      
      }

 

    getSnapshot() {
    // ['added', 'modified', 'removed']
    return this.experiencesCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        return { id: a.payload.doc.id, ...a.payload.doc.data() }
      })
    }))
  }

  getExperience(id) {
    return this.afs.doc<Experience>('experience/' + id);
  }




}
