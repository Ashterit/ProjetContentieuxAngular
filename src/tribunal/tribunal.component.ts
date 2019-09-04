import { Component, OnInit } from '@angular/core';
import { Tribunal } from 'src/app/model/tribunal';
import { TribunalService } from '../../service/tribunal.service';



@Component({
  selector: 'app-tribunal',
  templateUrl: './tribunal.component.html',
  styleUrls: ['./tribunal.component.scss']
})
export class TribunalComponent implements OnInit {
  roles:any[];
  role: Tribunal = new Tribunal();
  constructor(private tribunalService:TribunalService) { }

  ngOnInit() {
    this.locadTribunal();
  }
  locadTribunal() {
    this.tribunalService.getAllTribunal().subscribe(
      data => {this.roles = data;},
      error => {console.log(error);}
    )
  }