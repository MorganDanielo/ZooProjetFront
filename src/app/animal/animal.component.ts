import { Component, OnInit } from '@angular/core';
import { Animal } from '../Models/Animal';
import { AnimalService } from '../Services/Animal/animal.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  listeAnimaux:Animal[];
  animal:Animal;

  constructor(private aniService:AnimalService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.aniService.getAllAnimal().subscribe(data=>{
      this.listeAnimaux=data;
    });
  }

  notif(idAni: number, index) {
    Swal.fire({
      title: 'Etes-vous sûr(e) de vouloir supprimer cet animal ?',
      text: "Cette action est irréversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer cet animal!'
    }).then((result) => {
      if (result.value) {
        this.aniService.deleteAnimal(idAni).subscribe((res: Response) => {
          if (res) {
            this.listeAnimaux.splice(index, 1)
            Swal.fire(
              'Supprimé!',
              'L état a été supprimé.',
              'success'
            )
          }
        });
      }
    }).then(() => this.router.navigate(['/animaux']))
  }

}
