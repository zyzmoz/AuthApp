import { Component } from '@angular/core';
import { Auth0Service } from './providers/auth0.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  authenticated : boolean;

  constructor(private auth : Auth0Service){
    this.authenticated = this.auth.isAuthenticated();
    this.auth.handleAuthentication();
    console.log(this.authenticated);
    
  }

  doLogin() : void {
    this.auth.login();
    this.authenticated = this.auth.isAuthenticated();
    console.log(this.authenticated);
  }

  doLogout() : void {
    this.auth.logout();
    this.authenticated = this.auth.isAuthenticated();

  }


}
