import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from './artist/artist.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ArtistComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ArtistComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
