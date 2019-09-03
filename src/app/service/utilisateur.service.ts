import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  public getAllUtilisateur(): Observable<any> {
    return this.httpClient.get('http://localhost:9090/utilisateurs').map(response => response);
  }
  public getUtilisateur(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:9090/utilisateurs/' + id);
  }
  public saveUtilisateur(user: any): Observable<any> {
    return this.httpClient.post('http://localhost:9090/utilisateurs', user);
  }
  public deleteUtilisateur(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:9090/utilisateurs/' + id);
  }
  public updateUtilisateur(user: any): Observable<any> {
    var userParse = JSON.parse(user);
    return this.httpClient.put('http://localhost:9090/utilisateurs/' + userParse.idUtilisateur, userParse);
  }
}