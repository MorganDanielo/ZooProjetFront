import { Component, OnInit } from '@angular/core';
import { Zone } from '../Models/Zone';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ZoneService } from '../Services/Zone/zone.service';
import { ActivatedRoute, Router } from '@angular/router';
import { parse } from 'querystring';
import Swal from 'sweetalert2';
import { Staff } from '../Models/Staff';
import { StatutService } from '../Services/statut.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-update-zone',
  templateUrl: './update-zone.component.html',
  styleUrls: ['./update-zone.component.css']
})
export class UpdateZoneComponent implements OnInit {
  
  zone:Zone=new Zone();
  idZone:number;
  
  
  zoneForm:FormGroup
  submitted=false;

  constructor(private zoneService:ZoneService, private route:ActivatedRoute, private router:Router, private formBuilder:FormBuilder) {
    this.zoneForm=this.formBuilder.group({
      nom:['',Validators.required]
    });
   }

  ngOnInit() {
    this.idZone=parseInt(this.route.snapshot.paramMap.get('id'));
    this.zoneService.getZoneById(this.idZone).subscribe(data=>{
      this.zone=data;
    });
    
  }

  get f() {return this.zoneForm.controls}

  onSubmit(){
    this.submitted=true;

    if(this.zoneForm.invalid){
      return;
    }else {
      this.modifierZone();
    }
  }
  onReset(){
    this.submitted=false;
    this.zoneForm.reset();
  }

  notif(){
    Swal.fire({
      title:'Zone modifiée',
      icon:'success',
      showCancelButton:true,
      confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Super!',
    }).then(()=>this.router.navigate(['/zone']))
  }

  modifierZone(){
    this.zoneService.updateZone(this.idZone, this.zone).subscribe(res=>{
      console.log(res)
      if(res['idZone']!=null){
        this.notif();
      }
    });
  }

}
