import { Component, OnInit } from '@angular/core';
import { Enclos } from '../Models/Enclos';
import { EnclosService } from '../Services/Enclos/enclos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Zone } from '../Models/Zone';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enclos',
  templateUrl: './enclos.component.html',
  styleUrls: ['./enclos.component.css']
})
export class ENclosComponent implements OnInit {

  listeEnclos:Enclos[];
  enclos :Enclos;
  zone:Zone;

  constructor(private enclosService:EnclosService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.enclosService.getAllEnclos().subscribe(data=>{
      this.listeEnclos=data;
    });
  }

  notif(idEnclos: number, index) {
    Swal.fire({
      title: 'Etes-vous sûr(e) de vouloir supprimer cet enclos ?',
      text: "Cette action est irréversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer cet enclos!'
    }).then((result) => {
      if (result.value) {
        this.enclosService.deleteEnclos(idEnclos).subscribe((res: Response) => {
          if (res) {
            this.listeEnclos.splice(index, 1)
            Swal.fire(
              'Supprimé!',
              'L état a été supprimé.',
              'success'
            )
          }
        });
      }
    }).then(() => this.router.navigate(['/enclos']))
  }

}