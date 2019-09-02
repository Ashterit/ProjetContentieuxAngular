import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient: HttpClient) { }
  public getAllRole(): Observable<any> {
    return this.httpClient.get('http://localhost:9090/roles').map(response => response);
  }
  public getRole(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:9090/roles/' + id);
  }
  public saveUtilisateur(user: any): Observable<any> {
    return this.httpClient.post('http://localhost:9090/roles', user);
  }
  public deleteUtilisateur(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:9090/roles/' + id);
  }
  public updateUtilisateur(user: any): Observable<any> {
    var userParse = JSON.parse(user);
    return this.httpClient.put('http://localhost:9090/roles/' + userParse.idRole, userParse);
  }
}