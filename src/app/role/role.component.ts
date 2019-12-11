import { Component, OnInit } from '@angular/core';
import { Role } from '../Models/Role';
import { RoleService } from '../Services/Role/role.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  listeRole:Role[];
  role:Role;

  constructor(private roleService:RoleService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.roleService.getAllRole().subscribe(data=>{
      this.listeRole=data;
    });
  }

  notif(idRole: number, index) {
    Swal.fire({
      title: 'Etes-vous sûr(e) de vouloir supprimer ce statut ?',
      text: "Cette action est irréversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer ce statut !'
    }).then((result) => {
      if (result.value) {
        this.roleService.deleteRole(idRole).subscribe((res: Response) => {
          if (res) {
            this.listeRole.splice(index, 1)
            Swal.fire(
              'Supprimé!',
              'Le statut a été supprimé.',
              'success'
            )
          }
        });
      }
    }).then(() => this.router.navigate(['/role']))
  }

}
