import { Component, OnInit } from '@angular/core';
import { Nourriture } from '../Models/Nourriture';
import { NourritureService } from '../Services/Nourriture/nourriture.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nourriture',
  templateUrl: './nourriture.component.html',
  styleUrls: ['./nourriture.component.css']
})
export class NourritureComponent implements OnInit {

  listeNourriture:Nourriture[];
  nourriture:Nourriture;

  constructor(private nouService:NourritureService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.nouService.getAll().subscribe(data=>{
      this.listeNourriture=data;
    });
  }
  notif(idNou: number, index) {
    Swal.fire({
      title: 'Etes-vous sûr(e) de vouloir supprimer ce stock de nourriture ?',
      text: "Cette action est irréversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer ce stock!'
    }).then((result) => {
      if (result.value) {
        this.nouService.deleteNourriture(idNou).subscribe((res: Response) => {
          if (res) {
            this.listeNourriture.splice(index, 1)
            Swal.fire(
              'Supprimé!',
              'Ce stock a été supprimé.',
              'success'
            )
          }
        });
      }
    }).then(() => this.router.navigate(['/nourriture']))
  }

}
