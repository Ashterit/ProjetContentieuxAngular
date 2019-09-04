import { Routes } from '@angular/router';
import { RoleComponent } from '../../role/role.component';
import { LoginComponent } from '../../login/login.component';
import { UtilisateurComponent } from '../../utilisateur/utilisateur.component';


export const AdminLayoutRoutes: Routes = [
   /* { path: 'dashboard',      component: DashboardComponent }, */
  { path: '',               redirectTo: '/login', pathMatch: 'full'},
  { path: 'role',           component: RoleComponent },
  {path: 'login',           component: LoginComponent},
  {path: 'utilisateurs', component: UtilisateurComponent}
]
  /*  { path: 'affaire',              component: AffaireComponent},
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },*/
