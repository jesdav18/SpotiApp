import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from './artist/artist.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    ArtistComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArtistComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
