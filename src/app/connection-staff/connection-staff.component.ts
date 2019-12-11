import { Component, OnInit } from '@angular/core';
import { Staff } from '../Models/Staff';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../Services/authentification.service';

@Component({
  selector: 'app-connection-staff',
  templateUrl: './connection-staff.component.html',
  styleUrls: ['./connection-staff.component.css']
})
export class ConnectionStaffComponent implements OnInit {

  user:Staff=new Staff();

  loginForm:FormGroup;

   submitted=false;

  constructor(private formBuilder:FormBuilder, private router:Router, private authService:AuthentificationService) {
    this.loginForm=this.formBuilder.group({
      login:['',Validators.required],
      password:['',Validators.required]
    });
   }

  ngOnInit() {
    if(localStorage.getItem('currentUser')){
      this.router.navigate(['/accueil']);
    }
  }

  get f() { return this.loginForm.controls }

  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    } else {
      this.seConnecter();
    }
  }

  seConnecter() {
    this.authService.login(this.user.login, this.user.password);
  }

}
