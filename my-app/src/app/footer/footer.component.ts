import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer: {id: string,
    copyrighttext: string,
    developer: string,
    developerlink: string
  }[];

  constructor(private config: ConfigService) { }

  ngOnInit() {

    this.getPageData('pages', 'footer');
  }

  getPageData(database: string, id?: string) {
    this.config.getSettings(database, id).subscribe(
      data => {
        this.footer = data;
        console.log(this.footer);
      }
    );
  }

}
