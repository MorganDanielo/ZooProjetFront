import { Component, OnInit } from '@angular/core';
import { EtatService } from '../Services/Etat/etat.service';
import { Router } from '@angular/router';
import { Etat } from '../Models/Etat';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-etat',
  templateUrl: './add-etat.component.html',
  styleUrls: ['./add-etat.component.css']
})
export class AddEtatComponent implements OnInit {

  etat:Etat=new Etat();
  etatForm:FormGroup;
  submitted=false;

  constructor(private etatService:EtatService, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.etatForm=this.formBuilder.group({
      libelleEtat:['', Validators.required]
    });
  }

  get f(){return this.etatForm.controls}

  onSubmit(){
    this.submitted=true;

    if(this.etatForm.invalid){
      return;
    }else{
      this.ajoutEtat();
    }
  }

  onReset(){
    this.submitted=false;
    this.etatForm.reset();
  }

  ajoutEtat(){
    this.etatService.addEtat(this.etat).subscribe(res=>{
      console.log(res)
      if (res['idEtat']!=null){
        this.notif();
      }
    });
  }

  notif(){
    Swal.fire({
      title:'Etat ajouté',
      icon:'success',
      showCloseButton:true,
      confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Super!',

    }).then(()=>this.router.navigate(['/etat']))
  }

}
