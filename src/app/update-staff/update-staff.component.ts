import { Component, OnInit } from '@angular/core';
import { Staff } from '../Models/Staff';
import { Role } from '../Models/Role';
import { Zone } from '../Models/Zone';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../Services/Staff/staff.service';
import { RoleService } from '../Services/Role/role.service';
import { ZoneService } from '../Services/Zone/zone.service';
import { ThrowStmt } from '@angular/compiler';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit {

  staff:Staff=new Staff();
  idStaff:number;
  listeRole:Role[];
  listeZone:Zone[];
  staffForm:FormGroup;
  submitted=false;

  constructor(private staffService:StaffService, private roleService:RoleService, private zoneService:ZoneService, private router:Router, private formBuilder:FormBuilder, private route:ActivatedRoute ) {
    this.staffForm=this.formBuilder.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      login:['',Validators.required],
      password:['',Validators.required],
      role:['',Validators.required],
      zone:['',Validators.required]
    });
   }

  ngOnInit() {
    this.idStaff=parseInt(this.route.snapshot.paramMap.get('id'));
    this.staffService.getStaffById(this.idStaff).subscribe(data=>{
      this.staff=data;
    });
    this.zoneService.getAll().subscribe(data=>{
      this.listeZone=data;
    });
    this.roleService.getAllRole().subscribe(data=>{
      this.listeRole=data;
    });
  }

  get f() { return this.staffForm.controls }

  onSubmit() {
    this.submitted = true;

    if (this.staffForm.invalid) {
      return;
    } else {
      this.modifierStaff();
    }
  }

  onReset() {
    this.submitted = false;
    this.staffForm.reset();
  }

  modifierStaff() {
    this.staffService.updateStaff(this.idStaff,this.staff).subscribe(res => {
      console.log(res)
      if (res['idStaff'] != null) {
        this.notif();
      }
    });
  }
  notif() {
    Swal.fire({
      title: 'Personnel modifié',
      icon: 'success',
      showCloseButton: true,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Super!',

    }).then(() => this.router.navigate(['/personnel']))
  }

  byIdZone(z1: any, z2: any) {
    return z1.idZone == z2.idZone;
  }

  byIdStatut(s1: any, s2: any) {
    return s1.idRole == s2.idRole;
  }

}
