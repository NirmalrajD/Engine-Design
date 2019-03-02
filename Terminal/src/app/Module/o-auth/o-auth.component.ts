import { Component, OnInit } from '@angular/core';
import { OAuthService } from './oAuth.service/o-auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-o-auth',
  templateUrl: './o-auth.component.html',
  styleUrls: ['./o-auth.component.css']
})
export class OAuthComponent implements OnInit {
  uid: any;
  googleID : any;
  constructor(public OAuthService: OAuthService, private afAuth: AngularFireAuth) { 
    this.uid = this.OAuthService.uid;
    console.log(this.uid);
  }

  ngOnInit() {
  }

  login(A){
    this.googleID = this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider);
    console.log(this.googleID);
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
