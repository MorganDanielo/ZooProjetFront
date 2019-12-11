import { Component, OnInit } from '@angular/core';
import { Staff } from '../Models/Staff';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Role } from '../Models/Role';
import { Zone } from '../Models/Zone';
import { StaffService } from '../Services/Staff/staff.service';
import { RoleService } from '../Services/Role/role.service';
import { ZoneService } from '../Services/Zone/zone.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  staff:Staff=new Staff();
  listeRole:Role[];
  listeZone:Zone[];
  staffForm:FormGroup;
  submitted=false;

  constructor(private staffService:StaffService, private roleService:RoleService, private zoneService:ZoneService, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.staffForm=this.formBuilder.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      login:['',Validators.required],
      password:['',Validators.required],
      role:['',Validators.required],
      zone:['',Validators.required]
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
      this.ajoutStaff();
    }
  }

  onReset() {
    this.submitted = false;
    this.staffForm.reset();
  }

  ajoutStaff() {
    this.staffService.addStaff(this.staff).subscribe(res => {
      console.log(res)
      if (res['idStaff'] != null) {
        this.notif();
      }
    });
  }

  notif() {
    Swal.fire({
      title: 'Personnel ajouté',
      icon: 'success',
      showCloseButton: true,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Super!',

    }).then(() => this.router.navigate(['/personnel']))
  }

}
