import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtatComponent } from './etat/etat.component';
import { ENclosComponent } from './enclos/enclos.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RoleComponent } from './role/role.component';
import { StaffComponent } from './staff/staff.component';
import { ZoneComponent } from './zone/zone.component';
import { NourritureComponent } from './nourriture/nourriture.component';
import { AnimalComponent } from './animal/animal.component';
import { TacheComponent } from './tache/tache.component';
import { AddEtatComponent } from './add-etat/add-etat.component';
import { UpdateEtatComponent } from './update-etat/update-etat.component';
import { AddZoneComponent } from './add-zone/add-zone.component';
import { UpdateZoneComponent } from './update-zone/update-zone.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { UpdateRoleComponent } from './update-role/update-role.component';
import { AddEnclosComponent } from './add-enclos/add-enclos.component';
import { UpdateEnclosComponent } from './update-enclos/update-enclos.component';
import { AddNourritureComponent } from './add-nourriture/add-nourriture.component';
import { UpdateNourritureComponent } from './update-nourriture/update-nourriture.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { AddTacheComponent } from './add-tache/add-tache.component';
import { UpdateTacheComponent } from './update-tache/update-tache.component';
import { ConnectionStaffComponent } from './connection-staff/connection-staff.component';
import { PlanningComponent } from './planning/planning.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'accueil',
    pathMatch:'full'
  },
  {
    path:"accueil",
    component:AccueilComponent
  },
  {
    path:"etat",
    component:EtatComponent
  },
  {
    path:"enclos",
    component:ENclosComponent
  },
  {
    path:"role",
    component:RoleComponent
  },
  {
    path:"personnel",
    component:StaffComponent
     
  },
  {
    path:"zone",
    component:ZoneComponent
  },
  {
    path:"nourriture",
    component:NourritureComponent
  },
  {
    path:"animaux",
    component:AnimalComponent
  },
  {
    path:"tache",
    component:TacheComponent
     
  },
  {
    path:"ajoutEtat",
    component:AddEtatComponent
     
  },
  {
    path:"modifierEtat/:id",
    component:UpdateEtatComponent
     
  },
  {
    path:"ajoutZone",
    component:AddZoneComponent
     
  },
  {
    path:"modifierZone/:id",
    component:UpdateZoneComponent
     
  },
  {
    path:"ajoutRole",
    component:AddRoleComponent
     
  },
  {
    path:"modifierRole/:id",
    component:UpdateRoleComponent
     
  },
  {
    path:"ajoutEnclos",
    component:AddEnclosComponent
     
  },
  {
    path:"modifierEnclos/:id",
    component:UpdateEnclosComponent
     
  },
  {
    path:"ajoutNourriture",
    component:AddNourritureComponent
     
  },
  {
    path:"modifierNourriture/:id",
    component:UpdateNourritureComponent
  },
  {
    path:"ajoutAnimaux",
    component:AddAnimalComponent
     
  },
  {
    path:"modifierAnimal/:id",
    component:UpdateAnimalComponent
     
  },
  {
    path:"ajoutPersonnel",
    component:AddStaffComponent
     
  },
  {
    path:"modifierPersonnel/:id",
    component:UpdateStaffComponent
     
  },
  {
    path:"ajoutTache",
    component:AddTacheComponent
     
  },
  {
    path:"modifierTache/:id",
    component:UpdateTacheComponent
     
  },
  {
    path:"login",
    component:ConnectionStaffComponent
  },
  {
    path:"planning",
    component:PlanningComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
