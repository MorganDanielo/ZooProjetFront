import { Component, OnInit } from '@angular/core';
import { ZoneService } from '../Services/Zone/zone.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Zone } from '../Models/Zone';
import Swal from 'sweetalert2';
import { Staff } from '../Models/Staff';
import { StatutService } from '../Services/statut.service';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {

  listeZone: Zone[];
  zone:Zone;
  staff:Staff=new Staff();
  statut:string;
  isEmploye=false;

  constructor(private zoneService: ZoneService, private router: Router, private route: ActivatedRoute, private statutService:StatutService) { }

  ngOnInit() {
    this.zoneService.getAll().subscribe(data=>{
      this.listeZone=data;
    });
    this.statut=this.statutService.statut();
    if (this.statut == "Employe") {
      this.isEmploye = true;
    } else {
      this.isEmploye = false;
    }

  }

  notif(idZone: number, index) {
    Swal.fire({
      title: 'Etes-vous sûr(e) de vouloir supprimer cette zone ?',
      text: "Cette action est irréversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer cette zone !'
    }).then((result) => {
      if (result.value) {
        this.zoneService.deleteZone(idZone).subscribe((res: Response) => {
          if (res) {
            this.listeZone.splice(index, 1)
            Swal.fire(
              'Supprimé!',
              'La zone a été supprimée.',
              'success'
            )
          }
        });
      }
    }).then(() => this.router.navigate(['/zone']))
  }

}
