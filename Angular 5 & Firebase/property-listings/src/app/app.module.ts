import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './listings/listings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListingComponent } from './listing/listing.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { FirebaseService } from './services/firebase.service';


export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDJuxOvZwUAOAxlAhj6pIHjkZPHJMqlqxs",
        authDomain: "proplistings-cd1d9.firebaseapp.com",
        databaseURL: "https://proplistings-cd1d9.firebaseio.com",
        projectId: "proplistings-cd1d9",
        storageBucket: "proplistings-cd1d9.appspot.com",
        messagingSenderId: "505053029074"
    }
};

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'listings', component: ListingsComponent },
    { path: 'add-listing', component: AddListingComponent },
];


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ListingsComponent,
        NavbarComponent,
        ListingComponent,
        AddListingComponent,
        EditListingComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        RouterModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        AngularFireStorageModule // imports firebase/storage only needed for storage features
    ],
    providers: [FirebaseService],
    bootstrap: [AppComponent]
})
export class AppModule { }
