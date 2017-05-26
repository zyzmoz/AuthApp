import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../../providers/auth0.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: Auth0Service) { }

  ngOnInit() {
  }

  

}
