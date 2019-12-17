import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tache } from 'src/app/Models/Tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http:HttpClient) { }

  getAllTache(){
    return this.http.get<Tache[]>("http://localhost:8080/tache").pipe()
  }

  getTacheById(idTache:number){
    return this.http.get<Tache>("http://localhost:8080/tache/"+idTache).pipe()
  }

  addTache(tache:Tache){
    return this.http.post("http://localhost:8080/tache", tache).pipe()
  }

  deleteTache(idTache:number){
    return this.http.delete("http://localhost:8080/tache/"+idTache).pipe()
  }

  updateTache(idTache:number, tache:Tache){
    return this.http.put("http://localhost:8080/tache/"+idTache, tache).pipe()
  }

  getTacheByIdStaff(idStaff:number){
    return this.http.get<Tache[]>("http://localhost:8080/tache/staff/"+idStaff).pipe()
  }

}
