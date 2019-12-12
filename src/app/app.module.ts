import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { JwtModule } from "@auth0/angular-jwt";
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {FlatpickrModule} from 'angularx-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { registerLocaleData } from '@angular/common';
import {DemoUtilsModule} from '../app/planning/formatfrançais/module';

import localeFr from '@angular/common/locales/fr';  
registerLocaleData(localeFr);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EtatComponent } from './etat/etat.component';
import { ENclosComponent } from './enclos/enclos.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ZoneComponent } from './zone/zone.component';
import { StaffComponent } from './staff/staff.component';
import { NourritureComponent } from './nourriture/nourriture.component';
import { TacheComponent } from './tache/tache.component';
import { RoleComponent } from './role/role.component';
import { AnimalComponent } from './animal/animal.component';
import { AddEtatComponent } from './add-etat/add-etat.component';
import { UpdateEtatComponent } from './update-etat/update-etat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddZoneComponent } from './add-zone/add-zone.component';
import { UpdateZoneComponent } from './update-zone/update-zone.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { UpdateRoleComponent } from './update-role/update-role.component';
import { UpdateEnclosComponent } from './update-enclos/update-enclos.component';
import { AddEnclosComponent } from './add-enclos/add-enclos.component';
import { AddNourritureComponent } from './add-nourriture/add-nourriture.component';
import { UpdateNourritureComponent } from './update-nourriture/update-nourriture.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { UpdateTacheComponent } from './update-tache/update-tache.component';
import { AddTacheComponent } from './add-tache/add-tache.component';
import { ConnectionStaffComponent } from './connection-staff/connection-staff.component';
import { PlanningComponent } from './planning/planning.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EtatComponent,
    ENclosComponent,
    SidebarComponent,
    AccueilComponent,
    ZoneComponent,
    StaffComponent,
    NourritureComponent,
    TacheComponent,
    RoleComponent,
    AnimalComponent,
    AddEtatComponent,
    UpdateEtatComponent,
    AddZoneComponent,
    UpdateZoneComponent,
    AddRoleComponent,
    UpdateRoleComponent,
    UpdateEnclosComponent,
    AddEnclosComponent,
    AddNourritureComponent,
    UpdateNourritureComponent,
    UpdateAnimalComponent,
    AddAnimalComponent,
    AddStaffComponent,
    UpdateStaffComponent,
    UpdateTacheComponent,
    AddTacheComponent,
    ConnectionStaffComponent,
    PlanningComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    JwtModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgbModalModule,
    FlatpickrModule.forRoot(),
    DemoUtilsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
