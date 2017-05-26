import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../../providers/auth0.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile : any;

  constructor(private auth: Auth0Service) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
    console.log(this.profile);
    
  }

}
