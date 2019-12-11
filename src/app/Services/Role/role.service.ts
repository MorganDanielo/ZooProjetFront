import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from 'src/app/Models/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }

  getAllRole(){
    return this.http.get<Role[]>("http://localhost:8080/role").pipe()
  }

  getRoleById(idRole:number){
    return this.http.get<Role>("http://localhost:8080/role/"+idRole).pipe()
  }

  addRole(role:Role){
    return this.http.post("http://localhost:8080/role", role).pipe()
  }

  deleteRole(idRole:number){
    return this.http.delete("http://localhost:8080/role/"+idRole).pipe()
  }

  updateRole(idRole:number, role:Role){
    return this.http.put("http://localhost:8080/role/"+idRole, role).pipe()
  }
  
}
