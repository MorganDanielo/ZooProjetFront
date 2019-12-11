import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from 'src/app/Models/Animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http:HttpClient) { }

  getAllAnimal(){
    return this.http.get<Animal[]>("http://localhost:8080/animal").pipe()
  }

  getAnimalById(idAni:number){
    return this.http.get<Animal>("http://localhost:8080/animal/"+idAni).pipe()
  }

  addAnimal(animal:Animal){
    return this.http.post("http://localhost:8080/animal", animal).pipe()
  }

  deleteAnimal(idAni:number){
    return this.http.delete("http://localhost:8080/animal/"+idAni).pipe()
  }

  updateAnimal(idAni:number, animal:Animal){
    return this.http.put("http://localhost:8080/animal/"+idAni, animal).pipe()
  }
}
