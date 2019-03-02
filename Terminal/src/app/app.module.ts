import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireAuthModule } from 'angularfire2/auth';   
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OAuthComponent } from './Module/o-auth/o-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    OAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyDr2o71mhtlsg7-ffhOd46TPjpK5zszAGs",
        authDomain: "terminal-engine.firebaseapp.com",
        databaseURL: "https://terminal-engine.firebaseio.com",
        projectId: "terminal-engine",
        storageBucket: "terminal-engine.appspot.com",
        messagingSenderId: "873775363744"
      }),
      AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
