import { Component, OnInit } from '@angular/core';
import { Etat } from '../Models/Etat';
import { EtatService } from '../Services/Etat/etat.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-etat',
  templateUrl: './etat.component.html',
  styleUrls: ['./etat.component.css']
})
export class EtatComponent implements OnInit {

  listeEtat: Etat[];

  constructor(private etatService: EtatService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.etatService.getAll().subscribe(data => {
      this.listeEtat = data;
    });
  }

  notif(idEtat: number, index) {
    Swal.fire({
      title: 'Etes-vous sûr(e) de vouloir supprimer cet état ?',
      text: "Cette action est irréversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer cet état!'
    }).then((result) => {
      if (result.value) {
        this.etatService.deleteEtat(idEtat).subscribe((res: Response) => {
          if (res) {
            this.listeEtat.splice(index, 1)
            Swal.fire(
              'Supprimé!',
              'L état a été supprimé.',
              'success'
            )
          }
        });
      }
    }).then(() => this.router.navigate(['/etat']))
  }

}
