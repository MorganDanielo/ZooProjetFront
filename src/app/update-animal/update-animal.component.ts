import { Component, OnInit } from '@angular/core';
import { Animal } from '../Models/Animal';
import { Enclos } from '../Models/Enclos';
import { Nourriture } from '../Models/Nourriture';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnimalService } from '../Services/Animal/animal.service';
import { EnclosService } from '../Services/Enclos/enclos.service';
import { NourritureService } from '../Services/Nourriture/nourriture.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html',
  styleUrls: ['./update-animal.component.css']
})
export class UpdateAnimalComponent implements OnInit {

  animal: Animal = new Animal();
  idAni: number;
  listeEnclos: Enclos[];
  listeNourriture: Nourriture[];
  animalForm: FormGroup;
  submitted = false;

  constructor(private animalService: AnimalService, private enclosService: EnclosService, private nouService: NourritureService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
    this.animalForm = this.formBuilder.group({
      espece: ['', Validators.required],
      nourriture: ['', Validators.required],
      enclos: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.idAni = parseInt(this.route.snapshot.paramMap.get('id'));
    this.animalService.getAnimalById(this.idAni).subscribe(data => {
      this.animal = data;
    });
    this.enclosService.getAllEnclos().subscribe(data => {
      this.listeEnclos = data;
    });
    this.nouService.getAll().subscribe(data => {
      this.listeNourriture = data;
    });
  }

  get f() { return this.animalForm.controls }

  modifierAnimal() {
    this.animalService.updateAnimal(this.idAni, this.animal).subscribe(res => {
      console.log(res)
      if (res['idAni'] != null) {
        this.notif();
      }
    });
  }
  onSubmit() {
    this.submitted = false;

    if (this.animalForm.invalid) {
      return;
    } else {
      this.modifierAnimal();
    }
  }
  onReset() {
    this.submitted = false;
    this.animalForm.reset();
  }

  byIdEnclos(e1: any, e2: any) {
    return e1.idEnclos == e2.idEnclos;
  }

  byIdNourriture(n1: any, n2: any) {
    return n1.idNou == n2.idNou;
  }

  notif() {
    Swal.fire({
      title: 'Animal modifié',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Super!',
    }).then(() => this.router.navigate(['/animaux']))
  }

}
