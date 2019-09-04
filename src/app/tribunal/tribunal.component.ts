import { Component, OnInit } from '@angular/core';
import { Tribunal } from '../model/tribunal';
import { TribunalService } from '../service/tribunal.service';



@Component({
  selector: 'app-tribunal',
  templateUrl: './tribunal.component.html',
  //styleUrls: ['./tribunal.component.scss']
})
export class TribunalComponent implements OnInit {
  tribunals:any[];
  tribunal: Tribunal = new Tribunal();
  constructor(private tribunalService:TribunalService) { }

  ngOnInit() {
    this.locadTribunal();
  }
  locadTribunal() {
    this.tribunalService.getAllTribunal().subscribe(
      data => {this.tribunals = data;},
      error => {console.log(error);}
    )
  }
}