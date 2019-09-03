import { Component, OnInit } from '@angular/core';
import { Role } from '../model/role';
import { RoleService } from '../service/role.service';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  roles:any[];
  role: Role = new Role();
  constructor(private roleService:RoleService) { }

  ngOnInit() {
    this.locadRole();
  }
  locadRole() {
    this.roleService.getAllRole().subscribe(
      data => {this.roles = data;},
      error => {console.log(error);}
    )
  }
  createRole() {
    this.roleService.saveRole(this.role).subscribe(
      () => {this.locadRole(); this.role = new Role(); }
    )
  }

}
