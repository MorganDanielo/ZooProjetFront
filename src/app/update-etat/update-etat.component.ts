import { Component, OnInit } from '@angular/core';
import { EtatService } from '../Services/Etat/etat.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Etat } from '../Models/Etat';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-etat',
  templateUrl: './update-etat.component.html',
  styleUrls: ['./update-etat.component.css']
})
export class UpdateEtatComponent implements OnInit {

  etat:Etat=new Etat();
  idEtat:number;

  etatForm:FormGroup;
  submitted=false;

  constructor(private etatService:EtatService, private router:Router, private formBuilder:FormBuilder, private route:ActivatedRoute) {
    this.etatForm=this.formBuilder.group({
      libelleEtat:['',Validators.required]
    });
   }

  ngOnInit() {
    this.idEtat=parseInt(this.route.snapshot.paramMap.get('id'));
    this.etatService.getEtatById(this.idEtat).subscribe(data=>{
      this.etat=data;
    });
  }

  get f() {return this.etatForm.controls}

  modifierEtat(){
    this.etatService.updateEtat(this.idEtat, this.etat).subscribe(res=>{
      console.log(res)
      if(res['idEtat']!=null){
        this.notif();
      }
    });
  }

  onSubmit(){
    this.submitted=true;

    if(this.etatForm.invalid){
      return;
    }else {
      this.modifierEtat();
    }
  }
  onReset(){
    this.submitted=false;
    this.etatForm.reset();
  }

  notif(){
    Swal.fire({
      title:'Etat modifié',
      icon:'success',
      showCancelButton:true,
      confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Super!',
    }).then(()=>this.router.navigate(['/etat']))
  }

}
