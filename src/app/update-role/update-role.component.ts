import { Component, OnInit } from '@angular/core';
import { Role } from '../Models/Role';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoleService } from '../Services/Role/role.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {

  role:Role=new Role();
  idRole:number;

  roleForm:FormGroup;
  submitted=false;

  constructor(private roleService:RoleService, private route:ActivatedRoute, private router:Router, private formBuilder:FormBuilder) {
    this.roleForm=this.formBuilder.group({
      libelle:['', Validators.required]
    });

   }

  ngOnInit() {
    this.idRole=parseInt(this.route.snapshot.paramMap.get('id'));
    this.roleService.getRoleById(this.idRole).subscribe(data=>{
      this.role=data;
    });
  }

  get f() {return this.roleForm.controls}

  onSubmit(){
    this.submitted=true;

    if(this.roleForm.invalid){
      return;
    }else {
      this.modifierRole();
    }
  }

  onReset(){
    this.submitted=false;
    this.roleForm.reset();
  }

  notif(){
    Swal.fire({
      title:'Role modifié',
      icon:'success',
      showCancelButton:true,
      confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Super!',
    }).then(()=>this.router.navigate(['/role']))
  }

  modifierRole(){
    this.roleService.updateRole(this.idRole, this.role).subscribe(res=>{
      console.log(res)
      if(res['idRole']!=null){
        this.notif();
      }
    });
  }

}
