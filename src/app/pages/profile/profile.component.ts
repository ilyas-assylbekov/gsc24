import { Component, inject } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { DocumentReference, addDoc, collection, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.sass'
})
export class ProfileComponent{

  profile = {
    name: '',
    interests: ''
  };

  private auth: Auth = inject(Auth);
  private firestore: Firestore = inject(Firestore);
  users$: Observable<User[]>;

  constructor() {
    const userProfileCollection = collection( this.firestore, "users" );
    this.users$ = collectionData( userProfileCollection ) as Observable<User[]>; // all users
    this.authProfile(userProfileCollection);
  }

  async authProfile(userProfileCollection : any) {
    // TODO: check if current user has a profile already
    const user = this.auth.currentUser;
    if (user) {
      const docRef = doc(userProfileCollection, user.uid);
      const docSnap = await getDoc( docRef );
      if (docSnap.exists()) {
        // console.log(docSnap.data());
        this.profile.name = docSnap.data()['name'];
        this.profile.interests = docSnap.data()['interests'];
      }
    }
  }

  saveProfile() {
    const userProfileCollection = collection( this.firestore, "users" );
    const user = this.auth.currentUser;
    if (user) {
      const docRef = doc( userProfileCollection, user.uid );
      setDoc( docRef, this.profile );
    }
  }

}

