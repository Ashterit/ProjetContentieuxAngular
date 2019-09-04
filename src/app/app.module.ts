import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AppService } from './app.service';
import { RoleService } from './service/role.service';
import { TribunalService } from './service/tribunal.service';
import { AffaireService } from './service/affaire.service';
import { UserService } from './service/user.service';
import { FilterPipe } from './utilisateur/filter.pipe';



@Injectable()
export class XhrInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler){
    const xhr = req.clone({
      headers : req.headers.set('X-Requested-With','XMLHttpRequest')
    });
    return next.handle(xhr);
  }
} 

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    FilterPipe

  ],
  providers: [AppService, UserService, RoleService, TribunalService, AffaireService, {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
