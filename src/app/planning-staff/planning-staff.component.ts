import { Component, OnInit, ViewChild } from '@angular/core';
import { Tache } from '../Models/Tache';
import { TacheService } from '../Services/Tache/tache.service';
import { FullCalendarComponent } from '@fullcalendar/angular';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import * as moment from 'moment';
import dayGridPlugin from '@fullcalendar/daygrid';
import { OptionsInput } from '@fullcalendar/core';
import allLocales from '@fullcalendar/core/locales-all';
import { ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Staff } from '../Models/Staff';

@Component({
  selector: 'app-planning-staff',
  templateUrl: './planning-staff.component.html',
  styleUrls: ['./planning-staff.component.css']
})

export class PlanningStaffComponent implements OnInit {

  tache: Tache = new Tache();
  staff: Staff = new Staff();
  idStaff:number;
  helper=new JwtHelperService();
  
  constructor(private tacheService: TacheService, private route:ActivatedRoute) { }

  @ViewChild('calendar', { static: false }) calendarComponent: FullCalendarComponent;

  calendarPlugins = [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin];

  options:OptionsInput;
  eventsModel: any;
  listeTaches: Tache[];
  events: any = [];  
  editable=true;
  

  ngOnInit() {
    this.options={
      locales:allLocales,
      locale:'fr',
    }
    this.loadEvents();
  }

  loadEvents() {
    this.staff=this.helper.decodeToken(localStorage.getItem('currentUser'))['user'];
    console.log(this.staff.idStaff);
    this.idStaff=this.staff.idStaff;
    this.tacheService.getTacheByIdStaff(this.idStaff).subscribe(data => {
      this.listeTaches = data;
      this.listeTaches.forEach(tache => {
        this.events.push({
          title: tache.intitule,
          date: tache.date,
          end: moment(tache.date).add(tache.duree, 'm').toDate(),
        })
      })
      console.log(this.events);
      this.eventsModel = this.events
    })
  }

}
