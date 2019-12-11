import { Component, OnInit } from '@angular/core';
import { ZoneService } from '../Services/Zone/zone.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Zone } from '../Models/Zone';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-zone',
  templateUrl: './add-zone.component.html',
  styleUrls: ['./add-zone.component.css']
})
export class AddZoneComponent implements OnInit {
  zone:Zone=new Zone();

  zoneForm:FormGroup;
  submitted=false;

  constructor(private zoneService:ZoneService, private router:Router, private formBuilder:FormBuilder) {} 
   

  ngOnInit() {
    this.zoneForm=this.formBuilder.group({
      nom:['',Validators.required]
    });
  }

  get f(){return this.zoneForm.controls}

  onSubmit(){
    this.submitted=true;

    if(this.zoneForm.invalid){
      return;
    }else{
      this.ajoutZone();
    }
  }

  onReset(){
    this.submitted=false;
    this.zoneForm.reset();
  }

  ajoutZone(){
    this.zoneService.addZone(this.zone).subscribe(res=>{
      console.log(res)
      if (res['idZone']!=null){
        this.notif();
      }
    });
  }

  notif(){
    Swal.fire({
      title:'Zone ajoutée',
      icon:'success',
      showCloseButton:true,
      confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Super!',

    }).then(()=>this.router.navigate(['/zone']))
  }

}
