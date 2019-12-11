import { Component, OnInit } from '@angular/core';
import { Nourriture } from '../Models/Nourriture';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NourritureService } from '../Services/Nourriture/nourriture.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-nourriture',
  templateUrl: './add-nourriture.component.html',
  styleUrls: ['./add-nourriture.component.css']
})
export class AddNourritureComponent implements OnInit {

  nourriture:Nourriture=new Nourriture();
  nourritureForm:FormGroup;
  submitted=false;

  constructor(private nouService:NourritureService, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.nourritureForm=this.formBuilder.group({
      nom:['',Validators.required],
      stock:['',Validators.required]
    });
  }

  get f() { return this.nourritureForm.controls }

  onSubmit() {
    this.submitted = true;

    if (this.nourritureForm.invalid) {
      return;
    } else {
      this.ajoutNourriture();
    }
  }

  onReset() {
    this.submitted = false;
    this.nourritureForm.reset();
  }

  ajoutNourriture() {
    this.nouService.addNourriture(this.nourriture).subscribe(res => {
      console.log(res)
      if (res['idNou'] != null) {
        this.notif();
      }
    });
  }

  notif() {
    Swal.fire({
      title: 'Stock de nourriture ajouté',
      icon: 'success',
      showCloseButton: true,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Super!',

    }).then(() => this.router.navigate(['/nourriture']))
  }

}
