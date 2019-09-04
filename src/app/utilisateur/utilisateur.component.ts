import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { UserService } from '../service/user.service';
import { User } from '../model/User';


@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  utilisateurs:any[];
  utilisateur: User = new User();
  constructor(private appService:AppService,private utilisateurService: UserService) { }

  authenticated() {
    return this.appService.authenticated;
  }
  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.utilisateurService.getAllUtilisateur().subscribe(
      data => {this.utilisateurs = data;},
      error => {console.log(error);}
    )
  }

  createUser() {
    this.utilisateurService.saveUtilisateur(this.utilisateur).subscribe(
      () => {this.loadUser(); this.utilisateur = new User();}
    )
  }
  updateUser() {
    this.utilisateurService.updateUtilisateur(this.utilisateur).subscribe(
      data => {this.utilisateurs = data;},
      error => {console.log(error);}
    )
  }
}
