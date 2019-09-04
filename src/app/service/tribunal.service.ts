import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})

// user??
export class TribunalService {

  constructor(private httpClient: HttpClient) { }
  public getAllTribunal(): Observable<any> {
    return this.httpClient.get('http://localhost:9090/gestionCabinetAvocat/login/tribunals').map(response => response);
  }
  public getUTribunal(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:9090/gestionCabinetAvocat/login/tribunals/' + id);
  }
  public saveTribunal(user: any): Observable<any> {
    return this.httpClient.post('http://localhost:9090/gestionCabinetAvocat/login/tribunals', user);
  }
  public deleteTribunal(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:9090/gestionCabinetAvocat/login/tribunals/' + id);
  }
  public updateTribunal(user: any): Observable<any> {
    var userParse = JSON.parse(user);
    return this.httpClient.put('http://localhost:9090/tribunals/' + userParse.idTribunal, userParse);
  }
}