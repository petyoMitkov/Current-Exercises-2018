import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Listing } from '../models/listing-interface';

@Injectable()
export class FirebaseService {
    itemsCollection: AngularFirestoreCollection<Listing>
    items: Observable<Listing[]>


    constructor(public afs: AngularFirestore) {
        this.items = this.afs.collection('listings').valueChanges();
    }

    getListings() {
        return this.items;
    }
}
