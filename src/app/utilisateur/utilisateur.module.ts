import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilisateurComponent } from './utilisateur.component';
import { FilterPipe } from './filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UtilisateurComponent, FilterPipe],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  bootstrap: [UtilisateurComponent]
})
export class UtilisateurModule { }
