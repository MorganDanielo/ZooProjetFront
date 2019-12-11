import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nourriture } from 'src/app/Models/Nourriture';

@Injectable({
  providedIn: 'root'
})
export class NourritureService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Nourriture[]>("http://localhost:8080/nourriture").pipe()
  }

  getNourritureById(idNou:number){
    return this.http.get<Nourriture>("http://localhost:8080/nourriture/"+idNou).pipe()
  }

  addNourriture(nourriture:Nourriture){
    return this.http.post("http://localhost:8080/nourriture", nourriture).pipe()
  }

  deleteNourriture(idNou:number){
    return this.http.delete("http://localhost:8080/nourriture/"+idNou).pipe()
  }

  updateNourriture(idNou:number, nourriture:Nourriture){
    return this.http.put("http://localhost:8080/nourriture/"+idNou, nourriture).pipe()
  }
}
