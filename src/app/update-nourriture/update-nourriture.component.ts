import { Component, OnInit } from '@angular/core';
import { NourritureService } from '../Services/Nourriture/nourriture.service';
import { Nourriture } from '../Models/Nourriture';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-nourriture',
  templateUrl: './update-nourriture.component.html',
  styleUrls: ['./update-nourriture.component.css']
})
export class UpdateNourritureComponent implements OnInit {

  nourriture:Nourriture=new Nourriture();
  idNou:number;
  nourritureForm:FormGroup;
  submitted=false;

  constructor(private nouService:NourritureService, private router:Router, private route:ActivatedRoute, private formBuilder:FormBuilder) { 
    this.nourritureForm=this.formBuilder.group({
      nom:['',Validators.required],
      stock:['',Validators.required]
    });
  }

  ngOnInit() {
    this.idNou=parseInt(this.route.snapshot.paramMap.get('id'));
    this.nouService.getNourritureById(this.idNou).subscribe(data=>{
      this.nourriture=data;
    });
  }

  get f() { return this.nourritureForm.controls }

  onSubmit() {
    this.submitted = true;

    if (this.nourritureForm.invalid) {
      return;
    } else {
      this.modifierNourriture();
    }
  }

  byIdNou(n1:any,n2:any){
    return n1.idNou ==n2.idNou;
  }

  onReset() {
    this.submitted = false;
    this.nourritureForm.reset();
  }

  notif(){
    Swal.fire({
      title:'Stock de nourriture modifié',
      icon:'success',
      showCancelButton:true,
      confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Super!',
    }).then(()=>this.router.navigate(['/nourriture']))
  }

  modifierNourriture(){
    this.nouService.updateNourriture(this.idNou, this.nourriture).subscribe(res=>{
      console.log(res)
      if(res['idNou']!=null){
        this.notif();
      }
    });
  }


}
