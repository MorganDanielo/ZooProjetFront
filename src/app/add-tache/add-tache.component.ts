import { Component, OnInit } from '@angular/core';
import { Tache } from '../Models/Tache';
import { Staff } from '../Models/Staff';
import { Etat } from '../Models/Etat';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TacheService } from '../Services/Tache/tache.service';
import { StaffService } from '../Services/Staff/staff.service';
import { EtatService } from '../Services/Etat/etat.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.css']
})
export class AddTacheComponent implements OnInit {

  tache: Tache = new Tache();
  listeStaff: Staff[];
  listeEtat: Etat[];
  tacheForm: FormGroup;
  submitted = false;

  constructor(private tacheService: TacheService, private staffService: StaffService, private etatService: EtatService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.tacheForm = this.formBuilder.group({
      intitule: ['', Validators.required],
      date: ['', Validators.required],
      duree: ['', Validators.required],
      etat: ['', Validators.required],
      staff: ['', Validators.required]
    });
    this.etatService.getAll().subscribe(data => {
      this.listeEtat = data;
    });
    this.staffService.getAllStaff().subscribe(data => {
      this.listeStaff = data;
    });
  }

  get f() { return this.tacheForm.controls }

  onSubmit() {
    this.submitted = true;

    if (this.tacheForm.invalid) {
      return;
    } else {
      this.ajoutTache();
    }
  }

  onReset() {
    this.submitted = false;
    this.tacheForm.reset();
  }

  ajoutTache() {
    this.tacheService.addTache(this.tache).subscribe(res => {
      console.log(res)
      if (res['idTache'] != null) {
        this.notif();
      }
    });
  }

  notif() {
    Swal.fire({
      title: 'Tâche ajoutée',
      icon: 'success',
      showCloseButton: true,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Super!',

    }).then(() => this.router.navigate(['/planning']))
  }

}
