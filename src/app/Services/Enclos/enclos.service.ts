import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enclos } from 'src/app/Models/Enclos';

@Injectable({
  providedIn: 'root'
})
export class EnclosService {

  constructor(private http:HttpClient) { }

  getAllEnclos(){
    return this.http.get<Enclos[]>("http://localhost:8080/enclos").pipe()
  }

  getEnclosById(idEnclos:number){
    return this.http.get<Enclos>("http://localhost:8080/enclos/"+idEnclos).pipe()
  }

  addEnclos(enclos:Enclos){
    return this.http.post("http://localhost:8080/enclos", enclos).pipe()
  }

  deleteEnclos(idEnclos:number){
    return this.http.delete("http://localhost:8080/enclos/"+idEnclos).pipe()
  }

  updateEnclos(idEnclos:number, enclos:Enclos){
    return this.http.put("http://localhost:8080/enclos/"+idEnclos, enclos).pipe()
  }
  
}
