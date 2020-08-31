import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  constructor(private config: ConfigService) { }

  gallery: {id: string,
    name: string,
    tagline: string,
    title: string,
    description: string
  }[];

  images: {
    id: number,
    name: string}[];

  ngOnInit() {
    this.getPageData('pages', 'gallery');
    this.getBlockData('images');
  }

  getPageData(database: string, id?: string) {
    this.config.getSettings(database, id).subscribe(
      data => {
        this.gallery = data;
        console.log(this.gallery);
      }
    );
  }

  getBlockData(database: string ) {
    this.config.getSettings(database ).subscribe(
      data => {
        this.images = data;
        console.log(this.images);
      }
    );
  }


}
