import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Zone } from 'src/app/Models/Zone';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Zone[]>("http://localhost:8080/zone").pipe()
  }

  getZoneById(idZone:number){
    return this.http.get<Zone>("http://localhost:8080/zone/"+idZone).pipe()
  }

  addZone(zone:Zone){
    return this.http.post("http://localhost:8080/zone", zone).pipe()
  }

  deleteZone(idZone:number){
    return this.http.delete("http://localhost:8080/zone/"+idZone).pipe()
  }

  updateZone(idZone:number, zone:Zone){
    return this.http.put("http://localhost:8080/zone/"+idZone, zone).pipe()
  }
}
