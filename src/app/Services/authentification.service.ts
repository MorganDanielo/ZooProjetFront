import { Injectable } from '@angular/core';
import { Staff } from '../Models/Staff';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  user: Staff = new Staff();

  constructor(private http: HttpClient, private router: Router) { }

  loginWebService(login, password) {
    this.user.login = login
    this.user.password = password
    return this.http.post("http://localhost:8080/staff/login", this.user).pipe()
  }

  login(login, password) {
    this.loginWebService(login, password).subscribe(res => {
      console.log("REPONSE LOGIN" + res)
      if (res  != null) {
        localStorage.setItem('currentUser', res['token'])
      }
      if (localStorage.getItem('currentUser') != null) {
        this.notifReussite();
      } else {
        this.notifEchec();
      }
    });
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser') == null) {
      return false;
    }
    return true;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.notifDeco()
    window.location.href=""
  }

  notifDeco() {
    Swal.fire({
      title: 'Vous êtes déconnecté(e)',
      icon: 'success',
      showCloseButton: true,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Super!',        
    })
  }

  notifReussite() {
    Swal.fire({
      title: 'Vous êtes connecté(e)',
      icon: 'success',
      showCloseButton: true,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Super!',

    }).then(() => this.router.navigate(['/accueil']))
  }
  notifEchec() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Erreur d authentification!',

    }).then(() => this.router.navigate(['/login']))
  }

  
}
