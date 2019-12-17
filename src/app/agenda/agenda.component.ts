import { Component, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { TacheService } from '../Services/Tache/tache.service';
import { Tache } from '../Models/Tache';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import * as moment from 'moment';
import{frLocale} from '@fullcalendar/core/locales/fr';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { OptionsInput } from '@fullcalendar/core';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  tache: Tache = new Tache();

  constructor(private tacheService: TacheService) { }

  @ViewChild('calendar', { static: false }) calendarComponent: FullCalendarComponent;

  calendarPlugins = [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin];

  options:OptionsInput;
  eventsModel: any;
  listeTaches: Tache[];
  events: any = [];  
  editable=true;
  locale:frLocale;
  



  ngOnInit() {
    this.options={
      locale:frLocale,
    }

    this.loadEvents();
  }

  loadEvents() {
    this.tacheService.getAllTache().subscribe(data => {
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
