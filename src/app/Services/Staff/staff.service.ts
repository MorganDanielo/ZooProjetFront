import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Staff } from 'src/app/Models/Staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http:HttpClient) { }

  getAllStaff(){
    return this.http.get<Staff[]>("http://localhost:8080/staff").pipe()
  }

  getStaffById(idStaff:number){
    return this.http.get<Staff>("http://localhost:8080/staff/"+idStaff).pipe()
  }

  addStaff(staff:Staff){
    return this.http.post("http://localhost:8080/staff", staff).pipe()
  }

  deleteStaff(idStaff:number){
    return this.http.delete("http://localhost:8080/staff/"+idStaff).pipe()
  }

  updateStaff(idStaff:number, staff:Staff){
    return this.http.put("http://localhost:8080/staff/"+idStaff, staff).pipe()
  }

  connectionStaff(staff:Staff){
    return this.http.post("http://localhost:8080/staff/login", staff).pipe()
  }
}
