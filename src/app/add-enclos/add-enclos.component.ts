import { Component, OnInit } from '@angular/core';
import { Enclos } from '../Models/Enclos';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnclosService } from '../Services/Enclos/enclos.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Zone } from '../Models/Zone';
import { ZoneService } from '../Services/Zone/zone.service';

@Component({
  selector: 'app-add-enclos',
  templateUrl: './add-enclos.component.html',
  styleUrls: ['./add-enclos.component.css']
})
export class AddEnclosComponent implements OnInit {

  enclos: Enclos = new Enclos();
  listeZone: Zone[];

  enclosForm: FormGroup;
  submitted = false;

  constructor(private enclosService: EnclosService, private router: Router, private formBuilder: FormBuilder, private zoneService: ZoneService) { }

  ngOnInit() {
    this.enclosForm = this.formBuilder.group({
      capacite: ['', Validators.required],
      zone: ['', Validators.required]
    });
    this.zoneService.getAll().subscribe(data => {
      this.listeZone=data;
    });
  }

  get f() { return this.enclosForm.controls }

  onSubmit() {
    this.submitted = true;

    if (this.enclosForm.invalid) {
      return;
    } else {
      this.ajoutEtat();
    }
  }

  onReset() {
    this.submitted = false;
    this.enclosForm.reset();
  }

  ajoutEtat() {
    this.enclosService.addEnclos(this.enclos).subscribe(res => {
      console.log(res)
      if (res['idEnclos'] != null) {
        this.notif();
      }
    });
  }

  notif() {
    Swal.fire({
      title: 'Enclos ajouté',
      icon: 'success',
      showCloseButton: true,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Super!',

    }).then(() => this.router.navigate(['/enclos']))
  }

}
