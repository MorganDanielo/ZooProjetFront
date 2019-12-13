import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthentificationService } from '../Services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user;

  helper=new JwtHelperService();

  constructor(private authService:AuthentificationService) { }

  ngOnInit() {
    this.user=this.helper.decodeToken(localStorage.getItem('currentUser'))['user'];  

  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  logout(){
    return this.authService.logout();
  }

}
