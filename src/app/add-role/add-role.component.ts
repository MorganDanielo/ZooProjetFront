import { Component, OnInit } from '@angular/core';
import { Role } from '../Models/Role';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoleService } from '../Services/Role/role.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  role: Role = new Role();

  roleForm: FormGroup;
  submitted = false;

  constructor(private roleService: RoleService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.roleForm = this.formBuilder.group({
      libelle: ['', Validators.required]
    });
  }

  get f(){return this.roleForm.controls}

  onSubmit(){
    this.submitted=true;

    if(this.roleForm.invalid){
      return;
    }else{
      this.ajoutRole();
    }
  }

  onReset(){
    this.submitted=false;
    this.roleForm.reset();
  }

  ajoutRole(){
    this.roleService.addRole(this.role).subscribe(res=>{
      console.log(res)
      if (res['idRole']!=null){
        this.notif();
      }
    });
  }

  notif(){
    Swal.fire({
      title:'Rôle ajouté',
      icon:'success',
      showCloseButton:true,
      confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Super!',

    }).then(()=>this.router.navigate(['/role']))
  }


}
