import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthentificationService } from '../Services/authentification.service';
import { Staff } from '../Models/Staff';
import { StatutService } from '../Services/statut.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  staff:Staff=new Staff();
  statut:String

  helper=new JwtHelperService();

  constructor(private authService:AuthentificationService, private statutService:StatutService) { }

  ngOnInit() {
    this.staff=this.helper.decodeToken(localStorage.getItem('currentUser'))['user'];
    this.statut=this.statutService.statut()
    
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  logout(){
    return this.authService.logout();
  }

}
