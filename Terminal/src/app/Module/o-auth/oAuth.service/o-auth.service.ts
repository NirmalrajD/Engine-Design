import { Injectable } from '@angular/core';
import { of as observableOf, from } from 'rxjs'
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/Operators';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class OAuthService {

  uid = this.afAuth.authState.pipe(
    map(authState => {
        if(!authState){
          return null
        }else{
          return authState.uid
        }
      })
  );
  isAdmin = observableOf(true);
  constructor(private afAuth: AngularFireAuth) { }


}
