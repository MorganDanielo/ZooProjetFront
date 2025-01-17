import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetZoo';
  islogin:boolean;

  constructor (private router:Router){
    router.events.forEach(event=>{
      if (event instanceof NavigationStart){
        console.log(event['url'])
        if(event['url']=='/login'){
          this.islogin=true;
        }else{
          this.islogin=false;
        }
      }
    })
  }
  
}
