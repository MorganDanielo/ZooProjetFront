import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  ChangeDetectorRef
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
  DAYS_OF_WEEK,
} from 'angular-calendar';
import { Tache } from '../Models/Tache';
import { TacheService } from '../Services/Tache/tache.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-planning',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  listeTaches: Tache[];
  tache:Tache=new Tache();

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  viewDate = new Date();

 

  locale: string = 'Fr';

  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;

  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];

  CalendarView = CalendarView;

  list = [];


  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Editer',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Modifier', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      a11yLabel: 'Supprimer',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Supprimer', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = []; 

  activeDayIsOpen: boolean = true;

  constructor(private modal:NgbModal ,private tacheService: TacheService, private router: Router,private cd: ChangeDetectorRef) { }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  ngOnInit(){
    this.events = []
    this.tacheService.getAllTache().subscribe(data => {
      this.listeTaches = data;
      this.events = []
      this.listeTaches.forEach(tache => {
        this.events = [ ...this.events, {
          start: tache.date,
          title: tache.intitule,
          color: colors.red,
          actions: this.actions,
          allDay: true,
          resizable: {
            beforeStart: true,
            afterEnd: true
          },
          draggable: true
        }]
        
      });
      
      
      })
      console.log(this.events)
      
      
    

  }

  notif(idTache: number, index) {
    Swal.fire({
      title: 'Etes-vous sûr(e) de vouloir supprimer cette tâche ?',
      text: "Cette action est irréversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer cette tâche!'
    }).then((result) => {
      if (result.value) {
        this.tacheService.deleteTache(idTache).subscribe((res: Response) => {
          if (res) {
            this.listeTaches.splice(index, 1)
            Swal.fire(
              'Supprimé!',
              'Cette tâche a été supprimée.',
              'success'
            )
          }
        });
      }
    }).then(() => this.router.navigate(['/planning']))
  }
  
  afficher(){
    this.tacheService.getAllTache().subscribe(data => {
    this.listeTaches = data;
  });
  }
 

}
