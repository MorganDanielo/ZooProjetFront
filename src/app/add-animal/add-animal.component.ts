import { Component, OnInit } from '@angular/core';
import { Animal } from '../Models/Animal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnimalService } from '../Services/Animal/animal.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Enclos } from '../Models/Enclos';
import { Nourriture } from '../Models/Nourriture';
import { NourritureService } from '../Services/Nourriture/nourriture.service';
import { EnclosService } from '../Services/Enclos/enclos.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent implements OnInit {

  animal:Animal=new Animal();
  listeEnclos:Enclos[];
  listeNourriture:Nourriture[];
  animalForm:FormGroup;
  submitted=false;

  constructor(private animalService:AnimalService, private router:Router, private formBuilder:FormBuilder, private nouService:NourritureService, private enclosService:EnclosService) { }

  ngOnInit() {
    this.animalForm=this.formBuilder.group({
      espece:['',Validators.required],
      nourriture:['',Validators.required],
      enclos:['',Validators.required]
    });
    this.enclosService.getAllEnclos().subscribe(data=>{
      this.listeEnclos=data;
    });
    this.nouService.getAll().subscribe(data=>{
      this.listeNourriture=data;
    });
  }

  get f() { return this.animalForm.controls }

  onSubmit() {
    this.submitted = true;

    if (this.animalForm.invalid) {
      return;
    } else {
      this.ajoutAnimal();
    }
  }

  onReset() {
    this.submitted = false;
    this.animalForm.reset();
  }

  ajoutAnimal() {
    this.animalService.addAnimal(this.animal).subscribe(res => {
      console.log(res)
      if (res['idAni'] != null) {
        this.notif();
      }
    });
  }

  notif() {
    Swal.fire({
      title: 'Animal ajouté',
      icon: 'success',
      showCloseButton: true,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Super!',

    }).then(() => this.router.navigate(['/animaux']))
  }

}
