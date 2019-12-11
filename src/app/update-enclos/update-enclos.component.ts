import { Component, OnInit } from '@angular/core';
import { EnclosService } from '../Services/Enclos/enclos.service';
import { ZoneService } from '../Services/Zone/zone.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Enclos } from '../Models/Enclos';
import { Zone } from '../Models/Zone';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-enclos',
  templateUrl: './update-enclos.component.html',
  styleUrls: ['./update-enclos.component.css']
})
export class UpdateEnclosComponent implements OnInit {

  enclos:Enclos=new Enclos();
  idEnclos:number;
  listeZone:Zone[];

  enclosForm:FormGroup;
  submitted=false;

  constructor(private enclosService:EnclosService, private zoneService:ZoneService, private router:Router, private route:ActivatedRoute, private formBuilder:FormBuilder) {
    this.enclosForm=this.formBuilder.group({
      capacite:['',Validators.required],
      zone:['',Validators.required]
    });
   }

  ngOnInit() {
    this.idEnclos=parseInt(this.route.snapshot.paramMap.get('id'));
    this.enclosService.getEnclosById(this.idEnclos).subscribe(data=>{
      this.enclos=data;
    });
    this.zoneService.getAll().subscribe(data=>{
      this.listeZone=data;
    });
  }

  get f () {return this.enclosForm.controls}

  modifierEnclos(){
    this.enclosService.updateEnclos(this.idEnclos, this.enclos).subscribe(res=>{
      console.log(res)
      if(res['idEnclos']!=null){
        this.notif();
      }
    });
  }
  onSubmit() {    
    this.submitted = false;

    if (this.enclosForm.invalid) {
      return;
    } else {
      this.modifierEnclos();
    }
  }
  onReset() {
    this.submitted = false;
    this.enclosForm.reset();
  }

  byIdZone(z1:any,z2:any){
    return z1.idZone == z2.idZone;
  }

  notif() {
    Swal.fire({
      title: 'Enclos modifié',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Super!',
    }).then(() => this.router.navigate(['/enclos']))
  }

}
