import { Component, OnInit } from '@angular/core';
import { Tache } from '../Models/Tache';
import { Staff } from '../Models/Staff';
import { Etat } from '../Models/Etat';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TacheService } from '../Services/Tache/tache.service';
import { StaffService } from '../Services/Staff/staff.service';
import { EtatService } from '../Services/Etat/etat.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-tache',
  templateUrl: './update-tache.component.html',
  styleUrls: ['./update-tache.component.css']
})
export class UpdateTacheComponent implements OnInit {

  tache:Tache=new Tache();
  idTache:number;
  listeStaff:Staff[];
  listeEtat:Etat[];
  tacheForm:FormGroup;
  submitted=false;

  constructor(
    private tacheService:TacheService,
    private staffService:StaffService,
    private etatService:EtatService,
    private router:Router,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder) {
      this.tacheForm=this.formBuilder.group({
        intitule:['',Validators.required],
      date:['',Validators.required],
      duree:['',Validators.required],
      etat:['',Validators.required],
      staff:['',Validators.required]
      });
   }

  ngOnInit() {
    this.idTache=parseInt(this.route.snapshot.paramMap.get('id'));
    this.tacheService.getTacheById(this.idTache).subscribe(data=>{
      this.tache=data;
      this.tache.date=new Date(data['date'])
    });
    this.etatService.getAll().subscribe(data=>{
      this.listeEtat=data;
    });
    this.staffService.getAllStaff().subscribe(data=>{
      this.listeStaff=data;
    });
  }

  get f() {return this.tacheForm.controls}

  onSubmit() {
    this.submitted = true;

    if (this.tacheForm.invalid) {
      return;
    } else {
      this.modifierTache();
    }
  }

  onReset() {
    this.submitted = false;
    this.tacheForm.reset();
  }

  modifierTache(){
    this.tacheService.updateTache(this.idTache,this.tache).subscribe(res=>{
      console.log(res);
      if(res['idTache']!=null){
        this.notif();
      }
    });
  }

  notif() {
    Swal.fire({
      title: 'Tâche modifiée',
      icon: 'success',
      showCloseButton: true,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Super!',

    }).then(() => this.router.navigate(['/tache']))
  }

  byIdStaff(p1:any, p2:any){
    return p1.idStaff==p2.idStaff;
  }

  byIdEtat(e1:any,e2:any){
    return e1.idEtat==e2.idEtat;
  }

}
