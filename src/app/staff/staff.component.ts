import { Component, OnInit } from '@angular/core';
import { StaffService } from '../Services/Staff/staff.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Staff } from '../Models/Staff';
import { Zone } from '../Models/Zone';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  listeStaff:Staff[];
  zone:Zone;

  constructor(private staffService:StaffService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.staffService.getAllStaff().subscribe(data=>{
      this.listeStaff=data;
    });
  }

  notif(idStaff: number, index) {
    Swal.fire({
      title: 'Etes-vous sûr(e) de vouloir supprimer ce membre du personnel ?',
      text: "Cette action est irréversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer ce membre du personnel!'
    }).then((result) => {
      if (result.value) {
        this.staffService.deleteStaff(idStaff).subscribe((res: Response) => {
          if (res) {
            this.listeStaff.splice(index, 1)
            Swal.fire(
              'Supprimé!',
              'L état a été supprimé.',
              'success'
            )
          }
        });
      }
    }).then(() => this.router.navigate(['/staff']))
  }

}