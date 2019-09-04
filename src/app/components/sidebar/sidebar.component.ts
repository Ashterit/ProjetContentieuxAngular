import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    //{ path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    //{ path: '/icons', title: 'Icons',  icon:'education_atom', class: '' },
    //{ path: '/maps', title: 'Maps',  icon:'location_map-big', class: '' },
    //{ path: '/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },

    { path: '/user', title: 'User Profile',  icon:'users_single-02', class: '' },
    { path: '/role', title: 'Role',  icon:'users_circle-08', class: '' },
    { path: '/affaire', title: 'Affaire',  icon:'files_single-copy-04', class: '' },
    { path: '/tache', title: 'Tache',  icon:'files_paper', class: '' },
    { path: '/tribunal', title: 'Tribunal',  icon:'business_bank', class: '' },
    { path: '/tableau', title: 'Tableau de bord',  icon:'ui-1_calendar-60', class: 'active active-pro' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
