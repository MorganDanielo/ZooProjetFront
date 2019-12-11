import { Component, OnInit } from '@angular/core';
import { Tache } from '../Models/Tache';
import { TacheService } from '../Services/Tache/tache.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {

  listeTaches:Tache[];

  constructor(private tacheService:TacheService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.tacheService.getAllTache().subscribe(data=>{
      this.listeTaches=data;
    });
  }

  notif(idTache: number, index) {
    Swal.fire({
      title: 'Etes-vous sûr(e) de vouloir supprimer cette tâche ?',
      text: "Cette action est irréversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer cette tâche!'
    }).then((result) => {
      if (result.value) {
        this.tacheService.deleteTache(idTache).subscribe((res: Response) => {
          if (res) {
            this.listeTaches.splice(index, 1)
            Swal.fire(
              'Supprimé!',
              'Cette tâche a été supprimée.',
              'success'
            )
          }
        });
      }
    }).then(() => this.router.navigate(['/tache']))
  }

}
