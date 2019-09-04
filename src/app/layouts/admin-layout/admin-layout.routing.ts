import { Routes } from '@angular/router';
import { RoleComponent } from 'src/app/role/role.component';
import { LoginComponent } from 'src/app/login/login.component';
import { UserProfileComponent } from 'src/app/user-profile/user-profile.component';


export const AdminLayoutRoutes: Routes = [
   /* { path: 'dashboard',      component: DashboardComponent }, */
   { path: '',               redirectTo: '/login', pathMatch: 'full'},
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'role',           component: RoleComponent },
    {path: 'login',           component: LoginComponent}
]
 //   { path: 'affaire',              component: AffaireComponent},
  /*  { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },*/
