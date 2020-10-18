import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from './artist/artist.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NoImagePipe } from '../pipes/no-image.pipe';
import { PipesModule } from '../pipes/pipes.module';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { MensajeComponent } from './shared/mensaje/mensaje.component';

@NgModule({
  declarations: [
    ArtistComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    TarjetaComponent,
    LoadingComponent,
    MensajeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    ArtistComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    TarjetaComponent,
    LoadingComponent,
    MensajeComponent
  ]
})
export class ComponentsModule { }
