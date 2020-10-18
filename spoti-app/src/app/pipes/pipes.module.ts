import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoImagePipe } from './no-image.pipe';
import { DomseguroPipe } from './domseguro.pipe';
import { AlbumPipe } from './album.pipe';



@NgModule({
  declarations: [
    NoImagePipe,
    DomseguroPipe,
    AlbumPipe
  ],
  imports: [
    CommonModule
  ],
  exports :[
    NoImagePipe,
    DomseguroPipe,
    AlbumPipe
  ]

})
export class PipesModule { }
