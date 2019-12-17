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
import { AuthGuardService } from './Services/auth-guard.service';
import { AgendaComponent } from './agenda/agenda.component';
import { PlanningStaffComponent } from './planning-staff/planning-staff.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: "accueil",
    component: AccueilComponent
  },
  {
    path: "etat",
    component: EtatComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "enclos",
    component: ENclosComponent,
    canActivate: [AuthGuardService]

  },
  {
    path: "role",
    component: RoleComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "personnel",
    component: StaffComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "zone",
    component: ZoneComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "nourriture",
    component: NourritureComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "animaux",
    component: AnimalComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "tache",
    component: TacheComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "ajoutEtat",
    component: AddEtatComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "modifierEtat/:id",
    component: UpdateEtatComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "ajoutZone",
    component: AddZoneComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "modifierZone/:id",
    component: UpdateZoneComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "ajoutRole",
    component: AddRoleComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "modifierRole/:id",
    component: UpdateRoleComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "ajoutEnclos",
    component: AddEnclosComponent,
    canActivate : [AuthGuardService]
  },
  {
    path: "modifierEnclos/:id",
    component: UpdateEnclosComponent,
    canActivate : [AuthGuardService]
  },
  {
    path: "ajoutNourriture",
    component: AddNourritureComponent,
    canActivate : [AuthGuardService]
  },
  {
    path: "modifierNourriture/:id",
    component: UpdateNourritureComponent,
    canActivate : [AuthGuardService]
  },
  {
    path: "ajoutAnimaux",
    component: AddAnimalComponent,
    canActivate : [AuthGuardService]
  },
  {
    path: "modifierAnimal/:id",
    component: UpdateAnimalComponent,
    canActivate : [AuthGuardService]
  },
  {
    path: "ajoutPersonnel",
    component: AddStaffComponent,
    canActivate : [AuthGuardService]
  },
  {
    path: "modifierPersonnel/:id",
    component: UpdateStaffComponent,
    canActivate : [AuthGuardService]
  },
  {
    path: "ajoutTache",
    component: AddTacheComponent,
    canActivate : [AuthGuardService]
  },
  {
    path: "modifierTache/:id",
    component: UpdateTacheComponent,
    canActivate : [AuthGuardService]
  },
  {
    path: "login",
    component: ConnectionStaffComponent
  },
  {
    path: "planning",
    component: AgendaComponent,
    canActivate : [AuthGuardService]
  },
  {
    path:"staff",
    component:PlanningStaffComponent

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
