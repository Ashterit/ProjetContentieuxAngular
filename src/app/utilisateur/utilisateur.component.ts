import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/utilisateur.service';
import { AppService } from '../app.service';
import { Utilisateur } from '../model/utilisateur';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  utilisateurs:any[];
  utilisateur: Utilisateur = new Utilisateur();
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
      () => {this.loadUser(); this.utilisateur = new Utilisateur();}
    )
  }
}
