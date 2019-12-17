import { Injectable } from '@angular/core';
import { Staff } from '../Models/Staff';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class StatutService {
  staff:Staff=new Staff();

  helper=new JwtHelperService();

  constructor() { }

  statut(){
    this.staff=this.helper.decodeToken(localStorage.getItem('currentUser'))['user'];
    return this.staff.role.libelle;
  }
}
