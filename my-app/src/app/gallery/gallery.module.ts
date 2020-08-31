import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { ImageBlockComponent } from './image-block/image-block.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';


@NgModule({
  declarations: [ImageBlockComponent, GalleryPageComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
