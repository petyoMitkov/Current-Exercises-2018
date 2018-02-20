import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


import { Listing } from '../models/listing-interface';

@Injectable()
export class FirebaseService {
    itemsCollection: AngularFirestoreCollection<Listing>
    items: Observable<Listing[]>


    constructor(public afs: AngularFirestore) {
        this.items = afs.collection('listings').valueChanges();
    }

    getListings() {
        //this.items = this.afs.collection('listings').valueChanges();
        return this.items;
    }
}
